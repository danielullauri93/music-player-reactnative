`1. yarn add prettier -D`
`2. npx prettier --write .`
`3. npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar`

–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
app.json:

{
  "expo": {
    "name": "music-player-reactnative", // Nombre de la app
    "slug": "music-player-reactnative", // Identificador único del proyecto en Expo
    "version": "1.0.0", // Versión de la aplicación
    "orientation": "portrait", // Orientación fija en modo vertical
    "icon": "./assets/icon.png", // Ícono de la app

    "userInterfaceStyle": "dark", // Modo oscuro activado por defecto

    "scheme": "music-player", // Deep linking para abrir la app con 'music-player-reactnative://'
    
    "newArchEnabled": true, // Activa la nueva arquitectura de React Native (TurboModules y Fabric)

    "splash": { // Configuración de la pantalla de carga (Splash Screen)
      "image": "./assets/splash-icon.png", // Imagen del splash screen
      "resizeMode": "contain", // La imagen se ajusta sin recortarse
      "backgroundColor": "#000" // Color de fondo negro
    },

    "ios": {
      "supportsTablet": true // Permite compatibilidad con iPads
    },

    "android": {
      "adaptiveIcon": { // Ícono adaptativo en Android
        "foregroundImage": "./assets/adaptive-icon.png", // Imagen del ícono
        "backgroundColor": "#000" // Fondo negro del ícono
      }
    },

    "web": {
      "favicon": "./assets/favicon.png" // Ícono de la app en navegadores web
    },

    "plugins": [
      "expo-router" // Activa la navegación con expo-router
    ],

    "experiments": { // Opciones experimentales en Expo
      "typeRoutes": true, // Activa tipado automático en rutas (TypeScript)
      "tsconfigPath": true // Permite configurar un tsconfig.json personalizado
    }
  }
}
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
tsconfig.json:

{
	"extends": "expo/tsconfig.base", // Extiende la configuración base de TypeScript de Expo

	"compilerOptions": {
		"strict": true, // Activa todas las reglas estrictas de TypeScript
		"target": "ES6", // Compila el código para ES6 (ECMAScript 2015)
		"module": "commonjs", // Usa el sistema de módulos CommonJS (usado en Node.js)
		"moduleResolution": "Node", // Usa el sistema de resolución de módulos de Node.js
		"jsx": "react-native", // Permite usar JSX en archivos React Native

		"lib": ["dom", "esnext"], // Soporte para APIs del DOM y las últimas características de JS
		"noEmit": true, // Evita que TypeScript genere archivos `.js` al compilar

		"allowSyntheticDefaultImports": true, // Permite importar módulos sin `default` exportado
		"skipLibCheck": true, // No revisa los archivos `.d.ts` de librerías externas
		"resolveJsonModule": true, // Permite importar archivos JSON como módulos

		"baseUrl": ".", // Define la base de las rutas de importación
		"paths": { // Alias para rutas de importación más cortas
			"@/*": ["./src/*"], // `@/` apunta a la carpeta `src/`
			"@/assets/*": ["./assets/*"] // `@/assets/` apunta a `assets/`
		}
	},

	"include": [
		"**/*.ts", // Incluye todos los archivos TypeScript
		"**/*.tsx", // Incluye archivos TSX (React)
		".expo/types/**/*.ts", // Incluye los tipos generados por Expo
		"expo-env.d.ts" // Incluye este archivo de declaración de tipos
	],

	"exclude": ["node_modules"] // Excluye la carpeta `node_modules`
}
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

`4. npx expo run:ios`   –––––> esto crea una app fuera de expo
`5. npx expo install expo-dev-client` ––––––> crea mas opciones en el menu de expo
`6. yarn add -D eslint eslint-plugin-react eslint-plugin-react-hooks` 

–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
eslint.config.js:

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

–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
`7. yarn add -D @typescript-eslint/eslint-plugin`
`8. yarn add -D @typescript-eslint/parser`

en package.json:
"lint": "eslint --config eslint.config.js ."

`9. npx expo install expo-blur`

Si hay problemas para cargar la app primero se elimina:

`yarn remove expo-dev-client`

despues eliminas las carpetas node_modules e ios

luego: `yarn install`, despues: `npx expo run:ios`

–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

10. `npx expo install react-native-fast-image`