import { immerable } from "immer";
import { dependencyInjection } from "../../tools/commonDependencies.js";

'use strict'

class ContentBlockRoll extends ContentBlock {
    [immerable] = true;

    /** 
     * @param {string} name
     * @param {string} id
     * @param {string} type
     * @param {Roll[]} rolls
     */
    constructor({
        name,
        id,
        type = "rollButton",
        rolls,
    }) {
        super(name, id, type)
        this.rolls = rolls
    }
    
    withRolls(rolls) {
        return super._withUpdates({rolls: rolls});
    }
}
