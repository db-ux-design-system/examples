// eslint.config.js

import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";
import { defineConfig } from "eslint/config";
import { parser as eslintParserTypeScript } from "typescript-eslint";

export default defineConfig([
    {
        // enable all recommended rules
        extends: [
            eslintPluginBetterTailwindcss.configs.recommended
        ],

        settings: {
            "better-tailwindcss": {
                // tailwindcss 4: the path to the entry file of the css based tailwind config (eg: `src/global.css`)
                entryPoint: "src/index.css"
            }
        }
    },

    {
        files: ["**/*.{ts,tsx,cts,mts}"],
        languageOptions: {
            parser: eslintParserTypeScript,
            parserOptions: {
                projectService: true
            }
        }
    },

    {
        files: ["**/*.{jsx,tsx}"],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    }
]);