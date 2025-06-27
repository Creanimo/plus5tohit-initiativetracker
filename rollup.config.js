import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: "./src/app.js",
    output: [
        {
            file: "./dist/app.esm.js",
            format: "esm",
            sourcemap: true,
        },
    ],
    plugins: [
        nodeResolve({
            browser: true
        }),
        commonjs(),
    ],
};
