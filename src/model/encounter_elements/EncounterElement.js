import { immerable, produce } from "../../../node_modules/immer/dist/immer.production.mjs";
import { dependencyInjection } from "../../tools/commonDependencies.js";

"use strict";

/**
 * @typedef {"creature"|"event"|"legendaryCreature"|"generic"} EncounterElementTypes
 */

class EncounterElement {
    [immerable] = true;

    /**
     * @type {string}
     */
    name;

    /**
     * @type {string}
     */
    id;

    /**
     * @type {EncounterElementTypes}
     */
    type;

    /**
     * @type {ContentBlock[]}
     */
    contents;

    /**
     * @type {Dependencies}
     */
    _dependencies;

    /**
     *
     * @param {string} name
     * @param {string} id
     * @param {EncounterElementTypes} type
     * @param {ContentBlock[]} content
     * @param {Dependencies} dependencies
     */
    constructor({
                    name,
                    id = "",
                    type = "generic",
                    contents = [],
                    dependencies = dependencyInjection,
    }) {
        this._dependencies = dependencies;
        if (id === "") {
            id = this._dependencies.createId();
        }
        this.id = id;
        this.name = name;
        this.contents = contents;
        this.type = type;
    }

    /**
     *
     * @param {{}} updates
     * @returns {EncounterElement}
     * @private
     */
    _withUpdate(updates) {
        return produce(this, draft => {
            Object.assign(draft, updates)
        })
    }

    /**
     *
     * @param {string} newName
     * @returns {EncounterElement}
     */
    withName(newName) {
        return this._withUpdate({name: newName})
    }

    /**
     *
     * @param {ContentBlock[]} contents
     * @returns {EncounterElement}
     */
    withContents(contents) {
        return this._withUpdate({contents: contents})
    }
}

export default EncounterElement;
