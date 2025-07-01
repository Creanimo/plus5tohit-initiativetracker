import { immerable } from "../../../node_modules/immer/dist/immer.production.mjs";
import { dependencyInjection } from "../../tools/commonDependencies.js";
import ContentBlock from "./ContentBlock.js";

'use strict';

/**
 * @typedef {Object} Section
 * @property {string} label
 * @property {string} id
 * @property {ContentBlock} content
 * @property {boolean} isCollapsible
 * @property {boolean} isExpanded
 */

class ContentBlockSections extends ContentBlock {
    [immerable] = true;
    /**
     * @type {Section[]}
     */
    sections;

    /**
     * @type {boolean}
     */
    isCollapsible;

    /**
     * @type {boolean}
     */
    hasCloseOthersOnExpand;

    /*
     *
     * @param {string} title
     * @param {string} id
     * @param {string} type
     * @param {Dependencies} dependencies 
     * @param {Section[]} sections
     * @param {boolean} isCollapsible
     * @param {boolean} hasCloseOthersOnExpand
     * @constructor
     */
    constructor({
        title,
        id = "",
        type = "sections",
        dependencies = dependencyInjection,
        sections = [],
        isCollapsible = true,
        hasCloseOthersOnExpand = false,
    }) {
        super({
            title,
            id,
            type,
            dependencies,
        });

        this.sections = sections.map(section => ({
            ...section,
            content: this._dependencies.createContentBlock(section.content)
        }));

        this.isCollapsible = isCollapsible;

        if (!this.isCollapsible && hasCloseOthersOnExpand) {
            this._dependencies.log.warn(
                "Contradicting data: Sections are not collapsible, yet set to collapse other sections when one expands.\nSetting hasCloseOthersOnExpand to false."
            );
            this.hasCloseOthersOnExpand = false;
        } else {
            this.hasCloseOthersOnExpand = hasCloseOthersOnExpand;
        }
    }

    /**
     * @param {Section[]} sections
     * @returns {this}
     */
    withSections(sections) {
        return super._withUpdate({ sections })
    }

    /**
     * @param {boolean} isCollapsible
     * @returns {this}
     */
    withIsCollapsible(isCollapsible) {
        return super._withUpdate({ isCollapsible });
    }

    /**
     * @param {boolean} hasCloseOthersOnExpand
     * @returns {this}
     */
    withHasCloseOthersOnExpand(hasCloseOthersOnExpand) {
        return super._withUpdate({ hasCloseOthersOnExpand });
    }
}

export default ContentBlockSections;
