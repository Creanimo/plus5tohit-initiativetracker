import { immerable, produce } from "../../node_modules/immer/dist/immer.production.mjs";
import { dependencyInjection } from "../tools/commonDependencies.js";
import EncounterElement from "./encounter_elements/EncounterElement.js";


/**
 * Represents an encounter
 * @author Ferdinand Engländer
 */

class Encounter {
    [immerable] = true;

    /**
     * @type {string} Name of the encounter.
     */
    name;

    /**
     * @type {string} id of the encounter.
     */
    id;

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
     * @type {string[]} Ids of encounterElements in initiative order resolved from initiative values and tie-breakers.
     */
    initiativeOrder;

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
     * @param {Object.<string[]>} [options.initiativeOrder] Only use to ingest a custom order and circumvent normal calculation.
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
        initiativeOrder = null,
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
        this.initiativeValues = initiativeValues;
        this.initiativeTieBreakers = initiativeTieBreakers;
        if (initiativeOrder && initiativeOrder.length > 0) {
            this.initiativeOrder = initiativeOrder;
        } else {
            this.initiativeOrder = this.calculateInitiativeOrder();
        }
        this.currentRound = currentRound;
        this.currentTurn = currentTurn;
        this.activeStatusEffects = activeStatusEffects;

        this._dependencies.log.info(this, "Initialized a new Encounter");
    }

    /**
     * Updates properties by giving back a new immutable clone
     * @param {{}} updates
     * @returns {Encounter}
     * @private
     */
    _withUpdate(updates) {
        return produce(this, draft => {
            Object.assign(draft, updates)
        })
    }


    /**
     * @param {string} name 
     * @returns {Encounter} 
     */
    withName(name) {
        return this._withUpdate({ name: name });
    }

    /**
     * @param {string} id 
     * @returns {Encounter} 
     */
    withId(id) {
        return this._withUpdate({ id: id });
    }

    /**
     * @param {ContentBlock[]} contentBlocks 
     * @returns {Encounter} 
     */
    withGlobalContentBlocks(contentBlocks) {
        return this._withUpdate({ globalContentBlocks: contentBlocks });
    }

    /**
     * @param {ContentBlock} contentBlock 
     * @returns {Encounter} 
     */
    appendGlobalContentBlock(contentBlock) {
        return produce(this, draft => {
            draft.globalContentBlocks.push(contentBlock);
        })
    }

    /**
     * @param {EncounterElement[]} encounterElements 
     * @returns {Encounter} 
     */
    withEncounterElements(encounterElements) {
        return this._withUpdate({ encounterElements: encounterElements });
    }
    /**
     *
     * @param {EncounterElement[]} encounterElementsOutOfInitiative
     * @returns {Encounter}
     */
    withEncounterElementsOutOfInitiative(encounterElementsOutOfInitiative) {
        return this._withUpdate({ encounterElementsOutOfInitiative });
    }

    /**
     * @param {Object.<string, number>} initiativeValues
     * @returns {Encounter}
     */
    withInitiativeValues(initiativeValues) {
        return this._withUpdate({ initiativeValues });
    }

    /**
     * @param {Object.<number, string[]>} initiativeTieBreakers
     * @returns {Encounter}
     */
    withInitiativeTieBreakers(initiativeTieBreakers) {
        return this._withUpdate({ initiativeTieBreakers });
    }

    /**
     * @param {string[]} initiativeOrder
     * @returns {Encounter}
     */
    withInitiativeOrder(initiativeOrder) {
        return this._withUpdate({ initiativeOrder });
    }

    /**
     * @param {number} currentRound
     * @returns {Encounter}
     */
    withCurrentRound(currentRound) {
        return this._withUpdate({ currentRound });
    }

    /**
     * @param {number} currentTurn
     * @returns {Encounter}
     */
    withCurrentTurn(currentTurn) {
        return this._withUpdate({ currentTurn });
    }

    /**
     * @param {StatusEffect[]} activeStatusEffects
     * @returns {Encounter}
     */
    withActiveStatusEffects(activeStatusEffects) {
        return this._withUpdate({ activeStatusEffects });
    }

    /**
     * Calculates the initiative order based on initiative values and tie-breakers.
     * @returns {string[]} Array of EncounterElement IDs in initiative order.
     */
    calculateInitiativeOrder() {
        // 1. Group IDs by initiative value
        const valueToIds = {};
        for (const [id, value] of Object.entries(this.initiativeValues)) {
            if (!valueToIds[value]) valueToIds[value] = [];
            valueToIds[value].push(id);
        }

        // 2. Sort initiative values descending
        const sortedValues = Object.keys(valueToIds)
            .map(Number)
            .sort((a, b) => b - a);

        // 3. Build the final order
        const finalOrder = [];
        for (const value of sortedValues) {
            const ids = valueToIds[value];

            // If tie-breaker exists for this value, use it
            if (
                this.initiativeTieBreakers &&
                this.initiativeTieBreakers[value] &&
                Array.isArray(this.initiativeTieBreakers[value])
            ) {
                // Only include IDs that are actually in this tie group
                const tieBreakerOrder = this.initiativeTieBreakers[value].filter((id) =>
                    ids.includes(id)
                );
                // Add any IDs not in the tie-breaker at the end (preserve their original order)
                const remaining = ids.filter((id) => !tieBreakerOrder.includes(id));
                finalOrder.push(...tieBreakerOrder, ...remaining);
            } else {
                // No tie-breaker: preserve order from encounterElements
                const encounterOrder = this.encounterElements
                    .map((el) => el.id)
                    .filter((id) => ids.includes(id));
                finalOrder.push(...encounterOrder);
            }
        }

        return finalOrder;
    }

    /**
     * Checks if all IDs in initiativeOrder exist in encounterElements.
     * Optionally, checks for duplicates and missing IDs.
     * @returns {boolean}
     */
    isInitiativeOrderValid() {
        if (!Array.isArray(this.initiativeOrder)) return false;
        if (!Array.isArray(this.encounterElements)) return false;

        // Collect all valid IDs from encounterElements
        const validIds = new Set(this.encounterElements.map(el => el.id));

        // Check that every ID in initiativeOrder is in encounterElements
        for (const id of this.initiativeOrder) {
            if (!validIds.has(id)) {
                return false;
            }
        }

        // Check that there are no missing IDs (i.e., all encounterElements are present in initiativeOrder)
        // and that there are no duplicates
        if (this.initiativeOrder.length !== validIds.size) {
            return false;
        }
        const uniqueIds = new Set(this.initiativeOrder);
        if (uniqueIds.size !== this.initiativeOrder.length) {
            return false; // duplicate IDs found
        }

        return true;
    }

    /**
     * Gets the encounter objects in initiative order.
     * @returns {EncounterElement[]} Array of encounter objects in initiative order.
     */
    getInitiativeObjects() {
        return this.initiativeOrder.map((id) => {
            const element = this.encounterElements.find((el) => el.id === id);
            if (!element) {
                throw new Error(`EncounterElement with ID "${id}" not found`);
            }
            return element;
        });
    }
}

export default Encounter;
