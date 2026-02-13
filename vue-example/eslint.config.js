import dbUx from "@db-ux/core-eslint-plugin";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";

export default [
    {
        files: ["**/*.vue"],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: tsParser,
                ecmaVersion: "latest",
                sourceType: "module"
            }
        },
        plugins: {
            "db-ux": dbUx
        },
        rules: dbUx.configs.recommended.rules
    }
];