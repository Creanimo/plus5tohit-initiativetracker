import {dependencyInjection} from "../../tools/commonDependencies.js";

class EncounterElement {
    /**
     *
     * @param {string} name
     * @param {string} id
     * @param {string} type
     */
    constructor({
        name,
        id = "",
        type,
        dependencies = dependencyInjection,
                }) {
        this.name = name;
        this.id = id;
        this.type = type;
        this._dependencies = dependencies;
    }
}

export default EncounterElement;