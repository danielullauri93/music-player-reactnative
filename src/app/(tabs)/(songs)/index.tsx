// Importamos los componentes necesarios para la pantalla de canciones
import { TrackList } from "@/components/TrackList" // Componente que renderiza la lista de canciones
import { screenPadding } from "@/constants/tokens" // Valores de espaciado para el diseño de la pantalla
import { useNavigationSearch } from "@/hooks/useNavigationSearch" // Hook personalizado para la barra de búsqueda en la navegación
import { defaultStyles } from "@/styles" // Estilos generales de la aplicación
import { View, Text, ScrollView } from "react-native" // Componentes de React Native para la interfaz de usuario
import library from '@/assets/data/library.json' // Importamos el JSON con las canciones disponibles
import { useMemo } from "react" // Hook de React que optimiza cálculos
import { trackTitleFilter } from "@/helpers/filter" // Función que filtra canciones según el texto de búsqueda

// Definimos el componente funcional `SongScreen`
const SongScreen = () => {
  // Llamamos al hook `useNavigationSearch` para manejar la barra de búsqueda en la navegación
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: 'Find in songs', // Texto que aparece en la barra de búsqueda cuando está vacía
    }
  })

  // Filtramos las canciones en base al texto de búsqueda
  const filteredTracks = useMemo(() => { // usamos useMemo para optimizar el cálculo, porque funciona como un caché de resultados anteriores y evita recalcular si no hay cambios.
    if (!search) return library // Si no hay búsqueda, mostramos todas las canciones

    return library.filter(trackTitleFilter(search)) // Si hay búsqueda, aplicamos el filtro
  }, [search]) // Se ejecuta solo cuando cambia `search`

  return (
    // Contenedor principal de la pantalla con los estilos generales
    <View style={defaultStyles.container}>
      {/* ScrollView permite hacer scroll si hay muchas canciones */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic" // Ajusta el contenido automáticamente
        style={{ paddingHorizontal: screenPadding.horizontal }} // Agrega margen a los lados
      >
        {/* Renderiza la lista de canciones con las canciones filtradas */}
        <TrackList tracks={filteredTracks} scrollEnabled={false} />
      </ScrollView>
    </View>
  )
}

// Exportamos el componente para que pueda ser usado en la app
export default SongScreen
