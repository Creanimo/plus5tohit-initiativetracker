import { immerable } from "../../../node_modules/immer/dist/immer.production.mjs";
import { dependencyInjection } from "../../tools/commonDependencies.js";
import ContentBlock from "./ContentBlock.js";

'use strict';

class ContentBlockMarkdown extends ContentBlock {
    [immerable] = true;
    /**
     * Actual type depends on child class
     * @type {ContentBlockTypes}
     */
    static type = "markdown";

    /**
     * @type {string}
     */
    textContent;

    /*
     *
     * @param {string} title
     * @param {string} id
     * @param {Dependencies} dependencies 
     * @param {ContentBlock[]} contentBlocks
     */ 
    constructor ({
        title,
        id = "",
        dependencies = dependencyInjection,
        textContent = ""
    }) {
        super({
            title,
            id,
            dependencies,
        });
        this.textContent = textContent;
    }

    /**
     * @param {string} textContent 
     * @returns {ContentBlockMarkdown}
     */
    withTextContent(textContent) {
        return this._withUpdate({textContent});
    }
}

export default ContentBlockMarkdown;
