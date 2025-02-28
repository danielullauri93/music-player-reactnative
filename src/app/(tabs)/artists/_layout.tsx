import { StackScreenWithSearchBar } from "@/constants/layout";
import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";
import { View } from "react-native";

const ArtistsScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen name="index" options={{
          ...StackScreenWithSearchBar, // Aquí se aplican todas las opciones predefinidas
          headerTitle: 'Artists'
          }}/>
      </Stack>
    </View>
  )
}

export default ArtistsScreenLayout;

// ...StackScreenWithSearchBar → Uso del operador Spread
// El operador spread (...) copia todas las opciones de StackScreenWithSearchBar dentro de options.

// ¿Por qué se usa?

// Para no repetir código.
// Si en el futuro quieres cambiar algo en todas las pantallas, solo editas StackScreenWithSearchBar y todas se actualizarán automáticamente.
// Permite sobrescribir opciones específicas, como headerTitle: 'Songs'.