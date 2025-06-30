import { immerable } from "../../../node_modules/immer/dist/immer.production.mjs";
import { dependencyInjection } from "../../tools/commonDependencies.js";
import ContentBlock from "./ContentBlock.js";

'use strict';

/**
 * ContentBlockTrackerBar represents a tracker bar content block.
 * 
 * @extends ContentBlock
 */
class ContentBlockTrackerBar extends ContentBlock {
    [immerable] = true;
    /**
     * @type {string}
     */
    primaryLabel;

    /**
     * @type {string}
     */
    primaryDescription;

    /**
     * @type {number}
     */
    primaryMax;

    /**
     * @type {number}
     */
    primaryCurrent;

    /**
     * @type {string}
     */
    secondaryLabel;

    /**
     * @type {string}
     */
    secondaryDescription;

    /**
     * @type {number}
     */
    secondaryMax;

    /**
     * @type {number}
     */
    secondaryCurrent;

    /**
     * @type {boolean}
     */
    isSecondaryExtendsPrimary;

    /**
     * @param {Object} params
     * @param {string} params.title
     * @param {string} params.type
     * @param {string} [params.id]
     * @param {Dependencies} [params.dependencies]
     * @param {string} params.primaryLabel
     * @param {string} params.primaryDescription
     * @param {number} params.primaryMax
     * @param {number} params.primaryCurrent
     * @param {string} params.secondaryLabel
     * @param {string} params.secondaryDescription
     * @param {number} params.secondaryMax
     * @param {number} params.secondaryCurrent
     * @param {boolean} [params.isSecondaryExtendsPrimary]
     * @constructor
     */
    constructor({
        title,
        id = "",
        type = "trackerBar",
        dependencies = dependencyInjection,
        primaryLabel,
        primaryDescription,
        primaryMax,
        primaryCurrent,
        secondaryLabel,
        secondaryDescription,
        secondaryMax,
        secondaryCurrent,
        isSecondaryExtendsPrimary = false,
    }) {
        super({
            title,
            id,
            type,
            dependencies,
        });
        this.primaryLabel = primaryLabel;
        this.primaryDescription = primaryDescription;
        this.primaryMax = primaryMax;
        this.primaryCurrent = primaryCurrent;
        this.secondaryLabel = secondaryLabel;
        this.secondaryDescription = secondaryDescription;
        this.secondaryMax = secondaryMax;
        this.secondaryCurrent = secondaryCurrent;
        this.isSecondaryExtendsPrimary = isSecondaryExtendsPrimary;
    }

    /**
     * Returns a new instance with updated primaryLabel.
     * @param {string} primaryLabel
     * @returns {ContentBlockTrackerBar}
     */
    withPrimaryLabel(primaryLabel) {
        return super._withUpdate({ primaryLabel });
    }

    /**
     * Returns a new instance with updated primaryDescription.
     * @param {string} primaryDescription
     * @returns {ContentBlockTrackerBar}
     */
    withPrimaryDescription(primaryDescription) {
        return super._withUpdate({ primaryDescription });
    }

    /**
     * Returns a new instance with updated primaryMax.
     * @param {number} primaryMax
     * @returns {ContentBlockTrackerBar}
     */
    withPrimaryMax(primaryMax) {
        return super._withUpdate({ primaryMax });
    }

    /**
     * Returns a new instance with updated primaryCurrent.
     * @param {number} primaryCurrent
     * @returns {ContentBlockTrackerBar}
     */
    withPrimaryCurrent(primaryCurrent) {
        return super._withUpdate({ primaryCurrent });
    }

    /**
     * Returns a new instance with updated secondaryLabel.
     * @param {string} secondaryLabel
     * @returns {ContentBlockTrackerBar}
     */
    withSecondaryLabel(secondaryLabel) {
        return super._withUpdate({ secondaryLabel });
    }

    /**
     * Returns a new instance with updated secondaryDescription.
     * @param {string} secondaryDescription
     * @returns {ContentBlockTrackerBar}
     */
    withSecondaryDescription(secondaryDescription) {
        return super._withUpdate({ secondaryDescription });
    }

    /**
     * Returns a new instance with updated secondaryMax.
     * @param {number} secondaryMax
     * @returns {ContentBlockTrackerBar}
     */
    withSecondaryMax(secondaryMax) {
        return super._withUpdate({ secondaryMax });
    }

    /**
     * Returns a new instance with updated secondaryCurrent.
     * @param {number} secondaryCurrent
     * @returns {ContentBlockTrackerBar}
     */
    withSecondaryCurrent(secondaryCurrent) {
        return super._withUpdate({ secondaryCurrent });
    }

    /**
     * Returns a new instance with updated isSecondaryExtendsPrimary.
     * @param {boolean} isSecondaryExtendsPrimary
     * @returns {ContentBlockTrackerBar}
     */
    withIsSecondaryExtendsPrimary(isSecondaryExtendsPrimary) {
        return super._withUpdate({ isSecondaryExtendsPrimary });
    }
}

export default ContentBlockTrackerBar;
