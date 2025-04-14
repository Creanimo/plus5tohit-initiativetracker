import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
    input: "./src/index.js",
    output: [
        {
            file: "dist/app.esm.js",
            format: "esm",
            sourcemap: true,
        },
    ],
    plugins: [
        nodeResolve(),
    ],
};
