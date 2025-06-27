import { ContentBlockMarkdown } from "./modules.js";

window.process = {
    env: {
        NODE_ENV: "production"
    }
};

let markdownStuff = new ContentBlockMarkdown({
    title: "Description",
    textContent: "# Hello\nThis is a wonderful **markdown** text."
})

console.log(JSON.stringify(markdownStuff));
