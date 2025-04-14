class StatusEffect {
    /**
     * @type {string}
     */
    name;

    /**
     * @type {string}
     */
    description;

    /**
     * @type {string}
     */
    effectedParticipantId;

    /**
     * @type {string}
     */
    causingParticipantId;

    /**
     * @type {number}
     */
    maxDuration;

    /**
     * @type {number}
     */
    roundsPassed;

    /**
     *
     * @param {string} name
     * @param {string} description
     * @param {string} effectedParticipantId
     * @param {string | null} causingParticipantId
     * @param {number} maxDuration
     * @param {number} roundsPassed
     */
    constructor({
        name,
        description = "",
        effectedParticipantId,
        causingParticipantId = null,
        maxDuration = 0,
        roundsPassed = 0,
                }) {
        this.name = name;
        this.description = description;
        this.effectedParticipantId = effectedParticipantId;
        this.causingParticipantId = causingParticipantId;
        this.maxDuration = maxDuration;
        this.roundsPassed = roundsPassed;
    }
}

export default StatusEffect;