import { immerable } from "../../../node_modules/immer/dist/immer.production.mjs";
import { dependencyInjection } from "../../tools/commonDependencies.js";
import ContentBlock from "./ContentBlock.js";

'use strict';

/**
 * ContentBlockTrackerSlots represents a slot counter content block.
 * 
 * @extends ContentBlock
 */
class ContentBlockTrackerSlots extends ContentBlock {
    [immerable] = true;
    /**
     * @type {string}
     */
    description;

    /**
     * @type {number}
     */
    maxSlots;

    /**
     * @type {number}
     */
    markedSlots;

    /**
     * @param {Object} params
     * @param {string} params.title
     * @param {string} params.id
     * @param {string} params.type
     * @param {Dependencies[]} params.dependencies
     * @param {string} params.description
     * @param {number} params.maxSlots
     * @param {number} params.markedSlots
     * @constructor
     */
    constructor({
        title,
        id = "",
        type,
        dependencies = dependencyInjection,
        description,
        maxSlots,
        markedSlots,
    }) {
        super({
            title,
            id,
            type,
            dependencies,
        });
        this.description = description;
        this.maxSlots = maxSlots;
        this.markedSlots = markedSlots;
    }

    /**
     * Returns a new instance with updated description.
     * @param {string} description
     * @returns {this}
     */
    withDescription(description) {
        return super._withUpdate({ description });
    }

    /**
     * Returns a new instance with updated maxSlots.
     * @param {number} maxSlots
     * @returns {this}
     */
    withMaxSlots(maxSlots) {
        return super._withUpdate({ maxSlots });
    }

    /**
     * Returns a new instance with updated markedSlots.
     * @param {number} markedSlots
     * @returns {this}
     */
    withMarkedSlots(markedSlots) {
        return super._withUpdate({ markedSlots });
    }
}

export default ContentBlockTrackerSlots;
