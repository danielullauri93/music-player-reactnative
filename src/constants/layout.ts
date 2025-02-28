import { NativeStackNavigationOptions } from "@react-navigation/native-stack"; // Es un tipo de TypeScript que define las opciones de configuración para las pantallas en un navegador de pila (Stack Navigator).
import { colors } from "./tokens";

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
  headerLargeTitle: true, // Hace que el título sea grande en iOS
  headerLargeStyle: {
    backgroundColor: colors.background, // Color de fondo del header
  },
  headerTitleStyle: {
    color: colors.text,
  },
  headerTintColor: colors.text,  // Color de los íconos en el header
  headerTransparent: true,  // Hace que el header sea transparente
  headerBlurEffect: 'prominent',  // Agrega un efecto de desenfoque al header en iOS
  headerShadowVisible: false,  // Oculta la sombra del header
}


// Notas:
// ¿Por qué se pone : NativeStackNavigationOptions?
// Porque en TypeScript, queremos asegurarnos de que StackScreenWithSearchBar tiene la estructura correcta y solo permite opciones válidas.