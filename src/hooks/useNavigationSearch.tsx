// Importamos los colores definidos en el archivo de constantes
import { colors } from "@/constants/tokens"

// Importamos el hook `useNavigation` de `expo-router`, que nos permite acceder a la navegación
import { useNavigation } from "expo-router"

// Importamos `useLayoutEffect` para modificar el encabezado cuando el componente se monta
// Importamos `useState` para manejar el estado del campo de búsqueda
import { useLayoutEffect, useState } from "react"

// Importamos `SearchBarProps`, que contiene las propiedades disponibles para la barra de búsqueda en `react-native-screens`
import { SearchBarProps } from "react-native-screens"

// Definimos las opciones predeterminadas de la barra de búsqueda
const defaultSearchOptions: SearchBarProps = {
  tintColor: colors.primary,  // Color del texto y botones en la barra de búsqueda
  hideWhenScrolling: false,   // La barra de búsqueda no se oculta al hacer scroll
}

/**
 * Hook personalizado para agregar una barra de búsqueda a la navegación.
 * @param searchBarOptions - Opciones adicionales para la barra de búsqueda.
 * @returns `search` - El texto ingresado en la barra de búsqueda.
 */
export const useNavigationSearch = ({ searchBarOptions }: { searchBarOptions?: SearchBarProps }) => {
  // Creamos un estado `search` para almacenar el texto ingresado en la barra de búsqueda
  const [search, setSearch] = useState('')

  // Obtenemos el objeto `navigation`, que nos permite modificar la barra de navegación, useNavigation es un hook de expo-router
  const navigation = useNavigation()

  /**
   * Función que maneja el cambio de texto en la barra de búsqueda.
   * Extrae el texto del evento `nativeEvent` y lo guarda en el estado `search`.
   * nativeEvent: Propiedad de los eventos de React Native que contiene información específica del evento, cual es el texto ingresado en la barra de búsqueda.
   */
  const handleOnChangeText: SearchBarProps['onChangeText'] = ({ nativeEvent: { text } }) => {
    setSearch(text)
  }

  /**
   * `useLayoutEffect` se ejecuta cada vez que cambian `navigation` o `searchBarOptions`.
   * Modifica las opciones del encabezado de la pantalla para incluir una barra de búsqueda.
   */
  useLayoutEffect(() => {
    // Modificamos las opciones del `header` de la navegación
    navigation.setOptions({
      headerSearchBarOptions: {
        ...defaultSearchOptions,  // Aplicamos las opciones por defecto
        ...searchBarOptions,      // Sobrescribimos con las opciones que nos pasaron como parámetro
        onChangeText: handleOnChangeText,  // Agregamos el evento `onChangeText` para capturar el texto ingresado
      }
    })
  }, [navigation, searchBarOptions])  // Se ejecuta cuando `navigation` o `searchBarOptions` cambian

  // Devolvemos el estado `search`, para que el componente que usa este hook pueda acceder al texto de búsqueda
  return search
}


// Notas:
// ({ searchBarOptions })  // Esto significa que la función espera un objeto que tenga la propiedad `searchBarOptions`
// Es equivalente a escribir:

// (props) => {
//  const searchBarOptions = props.searchBarOptions;
// }

// Sin desestructuración:

// export const useNavigationSearch = (props: { searchBarOptions?: SearchBarProps }) => {
//  const searchBarOptions = props.searchBarOptions;
//}