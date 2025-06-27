import { immerable, produce } from "../../../node_modules/immer/dist/immer.production.mjs";
import { dependencyInjection } from "../../tools/commonDependencies.js";

'use strict';

/**
 * @typedef {null | "section" | "markdown" | "trackerBar" | "trackerSlots" | "rollButtons"} ContentBlockTypes
 */

class ContentBlock {
    [immerable] = true;
    /**
     * Actual type depends on child class
     * @type {ContentBlockTypes}
     */
    static type = null;

    /**
     * @type {string}
     */
    title;

    /**
     * @type {string}
     */
    id;

    /**
     *
     * @param {string} title
     * @param {string} id
     * @param {Dependencies} dependencies 
     */
    constructor({
        title,
        id = "",
        dependencies = dependencyInjection,
    }) {
        this._dependencies = dependencies;
        if (id === "") {
            this.id = this._dependencies.createId();
        } else {
            this.id = id;
        }
        this.title = title;
    }

    /**
     *
     * @param {{}} updates
     * @returns {ContentBlock}
     * @private
     */
    _withUpdate(updates) {
        return produce(this, draft => {
            Object.assign(draft, updates)
        })
    }

    /**
     * @param {string} id 
     * @returns {ContentBlock}
     */
    withId(id) {
        return this._withUpdate({id});
    }

    
    /**
     * @param {string} title 
     * @returns {ContentBlock}
     */
    withTitle(title) {
        return this._withUpdate({title});
    }
}

export default ContentBlock;
