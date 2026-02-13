import dbUx from "@db-ux/core-eslint-plugin";
import angularTemplateParser from "@angular-eslint/template-parser";

export default [
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: angularTemplateParser
    },
    plugins: {
      "db-ux": dbUx
    },
    rules: dbUx.configs.recommended.rules
  }
];
