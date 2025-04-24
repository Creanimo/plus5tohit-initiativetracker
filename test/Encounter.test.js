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
    log: { info: () => {} }
};

describe("Encounter", () => {
    beforeEach(() => {
        counter = 0;
    });

    function makeElement(name, id) {
        return new EncounterElement({ name, id, dependencies: mockDependencies });
    }

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

    it("getInitiativeObjects returns EncounterElements in order", () => {
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
        const objs = encounter.getInitiativeObjects();
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
