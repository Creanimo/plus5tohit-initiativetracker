import {dependencyInjection} from "../tools/commonDependencies.js";

/**
 * Represents an encounter
 * @author Ferdinand Engländer
 */

class Encounter {
    /**
     * @type {string} Name of the encounter.
     */
    name;

    /**
     * @type {ContentBlock[]} Global content blocks associated with the encounter.
     */
    globalContentBlocks;

    /**
     * @type {EncounterElement[]} Array of encounter elements (e.g., creatures, PCs, NPCs, lair actions).
     */
    encounterElements;

    /**
     * @type {EncounterElement[]} Array of encounter elements (e.g., creatures, PCs, NPCs, lair actions).
     */
    encounterElementsOutOfInitiative;

    /**
     * @type {string[]} Initiative order resolved from initiative values and tie-breakers.
     */
    _initiativeOrder;

    /**
     * @type {Object.<string, number>} Rolled initiative values mapped to the IDs of encounter elements.
     */
    initiativeValues;

    /**
     * @type {Object.<number, string[]>} Tie-breakers for initiative values, mapping tied values to arrays of element IDs.
     */
    initiativeTieBreakers;

    /**
     * @type {number} Current round of the encounter.
     */
    currentRound;

    /**
     * @type {number} Index of the currently active encounter element in the initiative order.
     */
    currentTurn;

    /**
     * @type {StatusEffect[]}
     */
    activeStatusEffects;

    /**
     * @type {Dependencies}
     */
    _dependencies;

    /**
     * @param {Object} options Options for initializing the encounter.
     * @param {string} options.name Name of the encounter.
     * @param {string} options.id
     * @param {ContentBlock[]} options.globalContentBlocks Global content blocks associated with the encounter.
     * @param {EncounterElement[]} options.encounterElements Array of encounter elements (e.g., creatures, NPCs).
     * @param {EncounterElement[]} options.encounterElementsOutOfInitiative Array of encounter elements (e.g., creatures, NPCs).
     * @param {Object.<string, number>} [options.initiativeValues] Rolled initiative values mapped to the IDs of encounter elements.
     * @param {Object.<number, string[]>} [options.initiativeTieBreakers] Tie-breakers for initiative values.
     * @param {number} [options.currentRound=1] Current round of the encounter.
     * @param {number} [options.currentTurn=0] Index of the currently active encounter element in the initiative order.
     * @param {StatusEffect[]} activeStatusEffects
     * @param {Dependencies} dependencies
     */
    constructor({
                    name,
                    id = "",
                    globalContentBlocks = [],
                    encounterElements = [],
                    encounterElementsOutOfInitiative = [],
                    initiativeValues = {},
                    initiativeTieBreakers = {},
                    currentRound = 1,
                    currentTurn = 0,
                    activeStatusEffects = [],
                    dependencies = dependencyInjection,
                }) {
        this._dependencies = dependencies;
        this.name = name;
        this.id = id;
        if (this.id === "") {
            this.id = this._dependencies.createId();
        }
        this.globalContentBlocks = globalContentBlocks;
        this.encounterElements = encounterElements;
        this.encounterElementsOutOfInitiative = encounterElementsOutOfInitiative;
        this._initiativeOrder = [];
        this.initiativeValues = initiativeValues;
        this.initiativeTieBreakers = initiativeTieBreakers;
        this.currentRound = currentRound;
        this.currentTurn = currentTurn;
        this.activeStatusEffects = activeStatusEffects;

        this._dependencies.log.info(this, "Initialized a new Encounter");
    }

    /**
     *
     * @param {string[]} initiativeOrder
     */
    set initiativeOrder(initiativeOrder) {
        this._initiativeOrder = initiativeOrder;
    }


    /**
     * Gets the encounter objects in initiative order.
     * @returns {EncounterElement[]} Array of encounter objects in initiative order.
     */
    getInitiativeObjects() {
        return this._initiativeOrder.map((id) => {
            const element = this.encounterElements.find((el) => el.id === id);
            if (!element) {
                throw new Error(`EncounterElement with ID "${id}" not found`);
            }
            return element;
        });
    }
}

export default Encounter;