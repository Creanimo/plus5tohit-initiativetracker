import { immerable, produce } from "../../../node_modules/immer/dist/immer.production.mjs";
import { dependencyInjection } from "../../tools/commonDependencies.js";
import ContentBlock from "../content_blocks/ContentBlock.js";
import ContentBlockMarkdown from "../content_blocks/ContentBlockMarkdown.js";
import ContentBlockSection from "../content_blocks/ContentBlockSection.js";
import ContentBlockTrackerBar from "../content_blocks/ContentBlockTrackerBar.js";
import ContentBlockTrackerSlots from "../content_blocks/ContentBlockTrackerSlots.js";

"use strict";

/**
 * @typedef {"creature"|"event"|"legendaryCreature"|"generic"} EncounterElementTypes
 */

class EncounterElement {
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
     * Is not static because it depends on configuration.
     * @type {EncounterElementTypes}
     */
    type;

    /**
     * @type {ContentBlock[]}
     */
    contents;

    /**
     * @type {Dependencies}
     */
    #dependencies;

    /**
     * @param {Object} params
     * @param {string} params.name
     * @param {string} [params.id]
     * @param {EncounterElementTypes} [params.type]
     * @param {Array<Object|ContentBlock>} [params.contents]
     * @param {Dependencies} [params.dependencies]
     */
    constructor({
        name,
        id = "",
        type = "generic",
        contents = [],
        dependencies = dependencyInjection,
    }) {
        this.#dependencies = dependencies;
        if (!id) {
            id = this.#dependencies.createId();
        }
        this.id = id;
        this.name = name;
        this.type = type;

        const contentTypeMap = {
            markdown: ContentBlockMarkdown,
            trackerBar: ContentBlockTrackerBar,
            trackerSlots: ContentBlockTrackerSlots,
        };

        this.contents = contents.map((contentElement) => {
            if (contentElement instanceof ContentBlock) {
                return contentElement;
            }
            const ContentClass = contentTypeMap[contentElement.type];
            if (ContentClass) {
                return new ContentClass(contentElement);
            }
            throw new Error(`Unknown content type: ${contentElement.type}`);
        });
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

    /**
     *
     * @param {string} newName
     * @returns {EncounterElement}
     */
    withName(newName) {
        return this._withUpdate({ name: newName })
    }

    /**
     * @param {string} id 
     * @returns {EncounterElement} 
     */
    withId(id) {
        return this._withUpdate({ id })
    }

    /**
     *
     * @param {ContentBlock[]} contents
     * @returns {EncounterElement}
     */
    withContents(contents) {
        return this._withUpdate({ contents: contents })
    }
}

export default EncounterElement;
