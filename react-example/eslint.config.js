import dbUx from "@db-ux/core-eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: { jsx: true }
            }
        },
        plugins: {
            "db-ux": dbUx
        },
        rules: dbUx.configs.recommended.rules
    }
];