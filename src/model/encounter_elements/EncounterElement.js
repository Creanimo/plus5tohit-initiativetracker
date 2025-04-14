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
                }) {
        this.name = name;
        this.id = id;
        this.type = type;
    }
}

export default EncounterElement;