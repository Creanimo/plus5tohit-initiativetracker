import ContentBlock from "./ContentBlock.js";
import ContentBlockMarkdown from "./ContentBlockMarkdown.js";
import ContentBlockSections from "./ContentBlockSections.js";
import ContentBlockTrackerBar from "./ContentBlockTrackerBar.js";
import ContentBlockTrackerSlots from "./ContentBlockTrackerSlots.js";

/**
 * @param {Object|ContentBlock} data
 * @returns {ContentBlock}
 */
export function createContentBlock(data) {
    if (data instanceof ContentBlock) {
        return data;
    }
    switch (data.type) {
        case "markdown":
            return new ContentBlockMarkdown(data);
        case "sections":
            return new ContentBlockSections(data);
        case "trackerBar":
            return new ContentBlockTrackerBar(data);
        case "trackerSlots":
            return new ContentBlockTrackerSlots(data);
        default:
            throw new Error(`Unknown content block type: ${data.type}`);
    }
}
