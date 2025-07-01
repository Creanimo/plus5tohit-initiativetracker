import { immerable } from "immer";
import { dependencyInjection } from "../../tools/commonDependencies.js";

'use strict';

/**
 * @typedef {Object} RollButton
 * @property {string} name
 * @property {string} icon
 * @property {string} description
 * @property {string} rollNotation
 */

class ContentBlockRollButtonGroup extends ContentBlock {
    [immerable] = true;

    /** 
     * @param {string} name
     * @param {string} id
     * @param {string} type
     * @param {RollButton[]} rolls
     * @constructor
     */
    constructor({
        name,
        id,
        type = "rollButtonGroup",
        dependencies = dependencyInjection,
        rolls,
    }) {
        super(name, id, type, dependencies)
        this.rolls = rolls
    }
    
    withRolls(rolls) {
        return super._withUpdates({rolls});
    }
}

export default ContentBlockRollButtonGroup;
