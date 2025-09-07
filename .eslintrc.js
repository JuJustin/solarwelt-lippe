module.exports = {
  parser: "@typescript-eslint/parser", // Unterstützt TypeScript
  extends: [
  ],
  parserOptions: {
    ecmaVersion: 2020, // Moderne JavaScript-Syntax
    sourceType: "module", // ES6 Module
    ecmaFeatures: {
      jsx: true, // Unterstützung für JSX
    },
  },
  settings: {
    react: {
      version: "detect", // Automatische Erkennung der installierten React-Version
    },
  },
  rules: {
    // Zusätzliche Anpassungen
    "react/react-in-jsx-scope": "off", // Nicht mehr nötig in Next.js
    "@typescript-eslint/no-unused-vars": "off",
  },
};
