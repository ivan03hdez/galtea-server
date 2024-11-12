import globals from "globals";
import tseslint from "typescript-eslint";
import tsparser from "@typescript-eslint/parser";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: [ "**/*.{mjs,ts}" ],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-multi-spaces": "error",
      "object-curly-spacing": [ "error", "always" ],
      "array-bracket-spacing": [ "error", "always" ],
      "key-spacing": [ "error", { "beforeColon": false, "afterColon": true } ],
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        process: true
      },
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
      parser: tsparser,
    },
    plugins: {
      "tseslint": tseslint
    },
  }
];