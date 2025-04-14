import { log } from "../tools/logger.js";
import { createId } from "../tools/createId.js";

class Dependencies {
    constructor() {
        this.log = log;
        this.createId = createId;
    }
}

const dependencyInjection = new Dependencies();

export { dependencyInjection };
