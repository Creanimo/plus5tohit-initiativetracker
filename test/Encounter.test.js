import { expect } from "chai";
import Encounter from "../src/model/Encounter.js";
import EncounterElement from "../src/model/encounter_elements/EncounterElement.js";

let counter;

// Mock dependency injection for testing
const mockDependencies = {
    createId: (() => {
        counter = 0;
        return () => `id-${++counter}`;
    })(),
    log: { info: () => { } }
};

function makeElement(name, id) {
    return new EncounterElement({ name, id, dependencies: mockDependencies });
}

describe("Encounter", () => {
    beforeEach(() => {
        counter = 0;
    });

    it("assigns an ID if none is provided", () => {
        const encounter = new Encounter({
            name: "Test",
            encounterElements: [],
            dependencies: mockDependencies
        });
        expect(encounter.id).to.equal("id-1");
    });

    it("uses provided ID if given", () => {
        const encounter = new Encounter({
            name: "Test",
            id: "custom-id",
            encounterElements: [],
            dependencies: mockDependencies
        });
        expect(encounter.id).to.equal("custom-id");
    });

    it("calculates initiative order without tie-breakers", () => {
        const elements = [
            makeElement("A", "a"),
            makeElement("B", "b"),
            makeElement("C", "c")
        ];
        const encounter = new Encounter({
            name: "Test",
            encounterElements: elements,
            initiativeValues: { a: 10, b: 15, c: 12 },
            dependencies: mockDependencies
        });
        expect(encounter.initiativeOrder).to.deep.equal(["b", "c", "a"]);
    });

    it("calculates initiative order with tie-breakers", () => {
        const elements = [
            makeElement("A", "a"),
            makeElement("B", "b"),
            makeElement("C", "c")
        ];
        const encounter = new Encounter({
            name: "Test",
            encounterElements: elements,
            initiativeValues: { a: 10, b: 15, c: 10 },
            initiativeTieBreakers: { 10: ["c", "a"] },
            dependencies: mockDependencies
        });
        expect(encounter.initiativeOrder).to.deep.equal(["b", "c", "a"]);
    });

    it("getEncounterElementsInInitiativeOrder returns EncounterElements in order", () => {
        const elements = [
            makeElement("A", "a"),
            makeElement("B", "b"),
            makeElement("C", "c")
        ];
        const encounter = new Encounter({
            name: "Test",
            encounterElements: elements,
            initiativeValues: { a: 10, b: 15, c: 12 },
            dependencies: mockDependencies
        });
        const objs = encounter.getEncounterElementsInInitiativeOrder();
        expect(objs.map(e => e.id)).to.deep.equal(["b", "c", "a"]);
    });

    it("isInitiativeOrderValid returns true for valid order", () => {
        const elements = [
            makeElement("A", "a"),
            makeElement("B", "b"),
            makeElement("C", "c")
        ];
        const encounter = new Encounter({
            name: "Test",
            encounterElements: elements,
            initiativeOrder: ["b", "c", "a"],
            dependencies: mockDependencies
        });
        expect(encounter.isInitiativeOrderValid()).to.be.true;
    });

    it("isInitiativeOrderValid returns false for missing ID", () => {
        const elements = [
            makeElement("A", "a"),
            makeElement("B", "b"),
            makeElement("C", "c")
        ];
        const encounter = new Encounter({
            name: "Test",
            encounterElements: elements,
            initiativeOrder: ["b", "c", "x"], // "x" does not exist
            dependencies: mockDependencies
        });
        expect(encounter.isInitiativeOrderValid()).to.be.false;
    });

    it("isInitiativeOrderValid returns false for duplicate IDs", () => {
        const elements = [
            makeElement("A", "a"),
            makeElement("B", "b"),
            makeElement("C", "c")
        ];
        const encounter = new Encounter({
            name: "Test",
            encounterElements: elements,
            initiativeOrder: ["b", "b", "a"],
            dependencies: mockDependencies
        });
        expect(encounter.isInitiativeOrderValid()).to.be.false;
    });

    it("withName returns a new Encounter with updated name", () => {
        const encounter = new Encounter({
            name: "Old",
            encounterElements: [],
            dependencies: mockDependencies
        });
        const updated = encounter.withName("New");
        expect(updated.name).to.equal("New");
        expect(encounter.name).to.equal("Old");
    });
});

describe("Encounter turn/round logic", () => {
    beforeEach(() => { counter = 0; });

    it("withStartFirstRound starts at turn 1, round 1", () => {
        const elements = [makeElement("A", "a"), makeElement("B", "b")];
        const encounter = new Encounter({
            name: "Test",
            encounterElements: elements,
            initiativeOrder: ["a", "b"],
            currentTurn: 0,
            currentRound: 0,
            dependencies: mockDependencies
        });
        const started = encounter.withStartFirstRound();
        expect(started.currentTurn).to.equal(1);
        expect(started.currentRound).to.equal(1);
        expect(started.getActiveEncounterElementId()).to.equal("a");
    });

    it("withStartFirstRound does nothing if already started", () => {
        const elements = [makeElement("A", "a"), makeElement("B", "b")];
        const encounter = new Encounter({
            name: "Test",
            encounterElements: elements,
            initiativeOrder: ["a", "b"],
            currentTurn: 1,
            currentRound: 1,
            dependencies: mockDependencies
        });
        const started = encounter.withStartFirstRound();
        expect(started).to.equal(encounter); // Should be the same instance
    });

    it("withAdvancedTurn advances turn", () => {
        const elements = [makeElement("A", "a"), makeElement("B", "b")];
        const encounter = new Encounter({
            name: "Test",
            encounterElements: elements,
            initiativeOrder: ["a", "b"],
            currentTurn: 1,
            currentRound: 1,
            dependencies: mockDependencies
        });
        const next = encounter.withAdvancedTurn();
        expect(next.currentTurn).to.equal(2);
        expect(next.currentRound).to.equal(1);
        expect(next.getActiveEncounterElementId()).to.equal("b");
    });

    it("withAdvancedTurn wraps to next round after last turn", () => {
        const elements = [makeElement("A", "a"), makeElement("B", "b")];
        const encounter = new Encounter({
            name: "Test",
            encounterElements: elements,
            initiativeOrder: ["a", "b"],
            currentTurn: 2,
            currentRound: 1,
            dependencies: mockDependencies
        });
        const next = encounter.withAdvancedTurn();
        expect(next.currentTurn).to.equal(1);
        expect(next.currentRound).to.equal(2);
        expect(next.getActiveEncounterElementId()).to.equal("a");
    });

    it("withAddedRound increments round", () => {
        const encounter = new Encounter({
            name: "Test",
            encounterElements: [],
            currentRound: 2,
            dependencies: mockDependencies
        });
        const next = encounter.withAddedRound();
        expect(next.currentRound).to.equal(3);
    });

    it("withSubstractedRound decrements round but not below 1", () => {
        const encounter = new Encounter({
            name: "Test",
            encounterElements: [],
            currentRound: 2,
            dependencies: mockDependencies
        });
        const next = encounter.withSubstractedRound();
        expect(next.currentRound).to.equal(1);

        const atOne = next.withSubstractedRound();
        expect(atOne.currentRound).to.equal(1);
    });

    it("getActiveEncounterElementId returns null if not started", () => {
        const elements = [makeElement("A", "a")];
        const encounter = new Encounter({
            name: "Test",
            encounterElements: elements,
            initiativeOrder: ["a"],
            currentTurn: 0,
            currentRound: 0,
            dependencies: mockDependencies
        });
        expect(encounter.getActiveEncounterElementId()).to.be.null;
    });

    it("getActiveEncounterElement returns correct element", () => {
        const elements = [makeElement("A", "a"), makeElement("B", "b")];
        const encounter = new Encounter({
            name: "Test",
            encounterElements: elements,
            initiativeOrder: ["a", "b"],
            currentTurn: 2,
            currentRound: 1,
            dependencies: mockDependencies
        });
        const active = encounter.getActiveEncounterElement();
        expect(active).to.be.an.instanceof(EncounterElement);
        expect(active.id).to.equal("b");
    });
});
