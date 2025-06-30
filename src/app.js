import { ContentBlockMarkdown, ContentBlockTrackerBar, EncounterElement } from "./modules.js";

window.process = {
    env: {
        NODE_ENV: "production"
    }
};

let markdownStuff = new ContentBlockMarkdown({
    title: "Description",
    textContent: "# Hello\nThis is a wonderful **markdown** text."
})

let healthBar = new ContentBlockTrackerBar({
    title: "",
    primaryLabel: "HP",
    primaryDescription: "Health Points",
    primaryMax: 52,
    primaryCurrent: 52,
    secondaryLabel: "temp HP",
    secondaryDescription: "Temporary Hit Points",
    secondaryMax: 0,
    secondaryCurrent: 0,
    isSecondaryExtendsPrimary: true,
})

console.log("Creating an object, then stringify it to JSON:")
let hansHero = new EncounterElement({
    name: "Hans Hero",
    contents: [healthBar, markdownStuff],
})
console.log(JSON.stringify(hansHero));

console.log("Taking a JSON string, constructing EncounterElement from it.")
let glarxTheGoblin = {"name":"Glarx the Goblin","id":"21125078","type":"generic","contents":[{"type":"trackerBar","title":"","id":"59113191","primaryLabel":"HP","primaryDescription":"Health Points","primaryMax":16,"primaryCurrent":8,"secondaryLabel":"temp HP","secondaryDescription":"Temporary Hit Points","secondaryMax":0,"secondaryCurrent":0,"isSecondaryExtendsPrimary":true},{"type":"markdown","title":"Description","id":"03211798","textContent":"A markdown **description** for Glarx the Goblin."}]};
glarxTheGoblin = new EncounterElement(glarxTheGoblin);
console.log(glarxTheGoblin);


