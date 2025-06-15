import { EncounterElement } from "./modules.js";

window.process = {
    env: {
        NODE_ENV: "production"
    }
};

let firstEncounterElement = new EncounterElement({name: "A first name"});
console.log(firstEncounterElement);
firstEncounterElement.withName("Gnurx the Goblin");
console.log(firstEncounterElement);
firstEncounterElement = firstEncounterElement.withName("Sarah Secondtry");
console.log(firstEncounterElement);
firstEncounterElement.name = "Change";
