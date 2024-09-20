import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  files: ["**/*.ts", "**/*.tsx", "**/*.vue"],
  rules: {
    "no-unused-vars": 1,
    "no-undef": "error",
    "prefer-const": "error",
    "@typescript-eslint/no-explicit-any": 1,
  },
});
