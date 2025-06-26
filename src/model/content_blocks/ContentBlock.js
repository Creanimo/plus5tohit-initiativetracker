import { immerable, produce } from "../../../node_modules/immer/dist/immer.production.mjs";
import { dependencyInjection } from "../../tools/commonDependencies.js";

'use strict';

/**
 * @typedef {"section" | "markdown" | "trackerBar" | "trackerSlots" | "rollButtons"} ContentBlockTypes
 */

class ContentBlock {
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
     * @type {ContentBlockTypes}
     */
    type;

    /**
     *
     * @param {string} name
     * @param {string} id
     * @param {string} type
     */
    constructor({
        name,
        id = "",
        type = "block",
        dependencies = dependencyInjection,
    }) {
        this._dependencies = dependencies;
        if (id === "") {
            this.id = this._dependencies.createId();
        } else {
            this.id = id;
        }
        this.name = name;
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
}

export default ContentBlock;
