import { immerable } from "../../../node_modules/immer/dist/immer.production.mjs";
import { dependencyInjection } from "../../tools/commonDependencies.js";
import ContentBlock from "./ContentBlock.js";

'use strict';

class ContentBlockSection extends ContentBlock {
    [immerable] = true;
    /**
     * @type {ContentBlock[]}
     */
    contentBlocks;

    /**
     * @type {boolean}
     */
    isExpanded;

    /**
     * @type {boolean}
     */
    isCollapsible;

    /*
     *
     * @param {string} title
     * @param {string} id
     * @param {string} type
     * @param {Dependencies} dependencies 
     * @param {ContentBlock[]} contentBlocks
     */ 
    constructor ({
        title,
        id = "",
        type,
        dependencies = dependencyInjection,
        contentBlocks = null,
        isExpanded = true,
        isCollapsible = true,
    }) {
        super({
            title,
            id,
            type,
            dependencies,
        });
        this.contentBlocks = contentBlocks;
        this.isExpanded = isExpanded;
        this.isCollapsible = isCollapsible;
    }

    /**
     * @param {boolean} isExpanded 
     * @returns {ContentBlockSection}
     */
    withIsExpanded(isExpanded) {
        return super._withUpdate({isExpanded});
    }

    /**
     * @param {boolean} isCollapsible
     * @returns {ContentBlockSection}
     */
    withIsExpanded(isCollapsible) {
        return super._withUpdate({isCollapsible});
    }
}

export default ContentBlockSection;
