import { immerable } from "../../../node_modules/immer/dist/immer.production.mjs";
import { dependencyInjection } from "../../tools/commonDependencies.js";
import ContentBlock from "./ContentBlock.js";

'use strict';

class ContentBlockMarkdown extends ContentBlock {
    [immerable] = true;
    /**
     * @type {string}
     */
    textContent;

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
        type = "markdown",
        dependencies = dependencyInjection,
        textContent = ""
    }) {
        super({
            title,
            id,
            type,
            dependencies,
        });
        this.textContent = textContent;
    }

    /**
     * @param {string} textContent 
     * @returns {ContentBlockMarkdown}
     */
    withTextContent(textContent) {
        return super._withUpdate({textContent});
    }
}

export default ContentBlockMarkdown;
