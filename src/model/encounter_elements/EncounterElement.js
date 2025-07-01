import { immerable, produce } from "../../../node_modules/immer/dist/immer.production.mjs";
import { dependencyInjection } from "../../tools/commonDependencies.js";
import ContentBlock from "../content_blocks/ContentBlock.js";

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
     * Is not static because it depends on configuration.
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
    #dependencies;

    /**
     * @param {Object} params
     * @param {string} params.name
     * @param {string} [params.id]
     * @param {EncounterElementTypes} [params.type]
     * @param {Array<Object|ContentBlock>} [params.contents]
     * @param {Dependencies} [params.dependencies]
     */
    constructor({
        name,
        id = "",
        type = "generic",
        contents = [],
        dependencies = dependencyInjection,
    }) {
        this.#dependencies = dependencies;
        if (!id) {
            id = this._dependencies.createId();
        }
        this.id = id;
        this.name = name;
        this.type = type;

        this.contents = contents.map(contentElement => this._dependencies.createContentBlock(contentElement));
    }

    get _dependencies() {
        return this.#dependencies;
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
        return this._withUpdate({ name: newName })
    }

    /**
     * @param {string} id 
     * @returns {EncounterElement} 
     */
    withId(id) {
        return this._withUpdate({ id })
    }

    /**
     *
     * @param {ContentBlock[]} contents
     * @returns {EncounterElement}
     */
    withContents(contents) {
        return this._withUpdate({ contents: contents })
    }
}

export default EncounterElement;
