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
    type = null;

    /**
     * @type {string}
     */
    title;

    /**
     * @type {string}
     */
    id;

    /**
     * @type {Dependencies}
     */
    #dependencies;

    /**
     *
     * @param {string} title
     * @param {string} id
     * @param {string} type
     * @param {Dependencies} dependencies 
     */
    constructor({
        title,
        id = "",
        type = null,
        dependencies = dependencyInjection,
    }) {
        this.#dependencies = dependencies;
        if (id === "") {
            this.id = this._dependencies.createId();
        } else {
            this.id = id;
        }
        this.title = title;
        this.type = type;
    }

    get _dependencies() {
        return this.#dependencies;
    }

    /**
     *
     * @param {{}} updates
     * @returns {this}
     * @private
     */
    _withUpdate(updates) {
        return produce(this, draft => {
            Object.assign(draft, updates)
        })
    }

    /**
     * @param {string} id 
     * @returns {this}
     */
    withId(id) {
        return this._withUpdate({id});
    }

    
    /**
     * @param {string} title 
     * @returns {this}
     */
    withTitle(title) {
        return this._withUpdate({title});
    }
}

export default ContentBlock;
