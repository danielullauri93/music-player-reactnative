// eslint.config.js
import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  js.configs.recommended, // Reglas recomendadas de ESLint
  ts.configs.recommended, // Reglas recomendadas para TypeScript
  react.configs.recommended, // Reglas recomendadas para React
  reactHooks.configs.recommended, // Reglas recomendadas para React Hooks

  {
    ignores: ["node_modules", "dist"], // Archivos a ignorar
    languageOptions: {
      parser: tsParser, // Usa TypeScript como parser
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: { jsx: true }, // Activa JSX
    },
    plugins: {
      "@typescript-eslint": ts,
      "react": react,
      "react-hooks": reactHooks,
    },
    rules: {
      "import/order": "off", // No exige ordenar importaciones
      "@typescript-eslint/no-explicit-any": "off", // Permite `any`
      "react/react-in-jsx-scope": "off", // No requiere `import React`
      "react/display-name": "off", // No exige nombres en componentes anónimos
      "@typescript-eslint/no-unused-vars": "warn", // Variables no usadas generan advertencia
    },
  },
];