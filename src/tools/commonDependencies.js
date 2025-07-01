import { log } from "../tools/logger.js";
import { createId } from "../tools/createId.js";
import { createContentBlock } from "../model/content_blocks/FactoryContentBlocks.js";

class Dependencies {
    constructor() {
        this.log = log;
        this.createId = createId;
        this.createContentBlock = createContentBlock; 
    }
}

const dependencyInjection = new Dependencies();

export { dependencyInjection };
