import { colors, fontSize } from "@/constants/tokens"
import { Tabs } from "expo-router"
import { BlurView } from "expo-blur"
import { StyleSheet } from "react-native"
import {FontAwesome, MaterialCommunityIcons, Ionicons, FontAwesome6} from '@expo/vector-icons'
const TabsNavigation = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: colors.primary, 
      // Tabs es un componente que se utiliza para definir una barra de pestañas. que esta abajo de la pantalla.
      // screenOptions es una propiedad que se utiliza para definir las opciones de configuración para todas las pantallas en un navegador de pestañas.  
    tabBarLabelStyle:{
    fontSize: fontSize.xs,
    fontWeight: 500,
  },
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 0,
    paddingTop: 8,
  },
  tabBarBackground: ()=> <BlurView intensity={95} style={{...StyleSheet.absoluteFillObject,
    // absoluteFillObject es un objeto que se utiliza para definir un estilo que ocupa todo el espacio disponible.
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }} />
  }}>
  {/* Tabs.Screen es un componente que se utiliza para definir una pantalla en una barra de pestañas. */}
    <Tabs.Screen name="favorites" options={{
      title:'Favorites',
      tabBarIcon: ({color}) => (
        <FontAwesome name="heart" size={20} color={color} />
      )
      }}/>

    <Tabs.Screen name="playlists" options={{
      title:'Playlists',
      tabBarIcon: ({color}) => (
        <MaterialCommunityIcons name="playlist-play" size={28} color={color} />
      )
      }}/>

    <Tabs.Screen name="(songs)" options={{
      title:'Songs',
      tabBarIcon: ({color}) => (
        <Ionicons name="musical-notes-sharp" size={24} color={color} />
      )
      }}/>
      
    <Tabs.Screen name="artists"  options={{
      title:'Artists',
      tabBarIcon: ({color}) => (
        <FontAwesome6 name="users-line" size={20} color={color} />
      )
      }}/>
  </Tabs>
  )
}

export default TabsNavigation