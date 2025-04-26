"use strict";

import { immerable } from "../../node_modules/immer/dist/immer.production.mjs";
import Encounter from "../model/Encounter";

class EncounterBuilder {
    [immerable] = true;
    /**
     * @param {Encounter|null} encounter
     * @param {GameRuleset} ruleset
     */
    constructor({encounter = null, ruleset}) {
        this.encounter = encounter;
    }

    startBuildingWithExamples(name) {
        if (this.encounter) { return this };
        newEncounter = new Encounter({name: name});
        // add example characters
        return this.withEncounter({encounter: newEncounter});
    }

    /**
     * Updates properties by giving back a new immutable clone
     * @param {{}} updates
     * @returns {Encounter}
     * @private
     */
    _withUpdate(updates) {
        return produce(this, draft => {
            Object.assign(draft, updates)
        })
    }

    withEncounter(encounter) {
        return this._withUpdate({encounter});
    }

    withEncounterElement(encounterElement) {
        encounterWithAddedElement = this.encounter.appendEncounterElement(encounterElement);
    }

}
