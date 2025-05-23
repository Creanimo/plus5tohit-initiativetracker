import { expect } from "chai";
import EncounterElement from "../src/model/encounter_elements/EncounterElement.js";

let counter;

// Mock dependency injection for testing
const mockDependencies = {
    createId: (() => {
        counter = 0;
        return () => `id-${++counter}`;
    })(),
};

describe("EncounterElement Initialization", () => {
    it("should initialize with default values", () => {
        const element = new EncounterElement({ name: "Test Element" });

        expect(element.name).to.equal("Test Element");
        expect(element.type).to.equal("generic");
        expect(element.contents).to.deep.equal([]);
        expect(element.id.length).to.equal(8); // ID should be auto-generated
    });

    it("should initialize with provided values", () => {
        const element = new EncounterElement({
            name: "Custom Element",
            id: "custom-id",
            type: "creature",
            contents: ["block1", "block2"],
            dependencies: mockDependencies,
        });

        expect(element.name).to.equal("Custom Element");
        expect(element.id).to.equal("custom-id");
        expect(element.type).to.equal("creature");
        expect(element.contents).to.deep.equal(["block1", "block2"]);
    });

    it("should use dependency injection to generate IDs", () => {
        const element = new EncounterElement({
            name: "Dependency Test",
            dependencies: mockDependencies,
        });

        expect(element.id).to.equal("id-1"); // ID generated by mockDependencies
    });
});

describe("EncounterElement Immutability", () => {
    it("should create a new instance when updating the name", () => {
        const element = new EncounterElement({ name: "Original Name", dependencies: mockDependencies });
        const updatedElement = element.withName("Updated Name");

        expect(updatedElement).to.not.equal(element); // Ensure a new instance is created
        expect(updatedElement.name).to.equal("Updated Name");
        expect(element.name).to.equal("Original Name"); // Original instance remains unchanged
    });

    it("should create a new instance when updating contents", () => {
        const element = new EncounterElement({ name: "Content Test", dependencies: mockDependencies });
        const updatedElement = element.withContents(["block1", "block2"]);

        expect(updatedElement).to.not.equal(element); // Ensure a new instance is created
        expect(updatedElement.contents).to.deep.equal(["block1", "block2"]);
        expect(element.contents).to.deep.equal([]); // Original instance remains unchanged
    });

    it("should preserve immutability when chaining updates", () => {
        const element = new EncounterElement({ name: "Chain Test", dependencies: mockDependencies });
        const updatedElement = element.withName("Updated Name").withContents(["block1"]);

        expect(updatedElement).to.not.equal(element); // Ensure a new instance is created
        expect(updatedElement.name).to.equal("Updated Name");
        expect(updatedElement.contents).to.deep.equal(["block1"]);
        expect(element.name).to.equal("Chain Test"); // Original instance remains unchanged
        expect(element.contents).to.deep.equal([]); // Original instance remains unchanged
    });
});
