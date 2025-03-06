import { useEffect, useRef } from 'react';
import TrackPlayer, { RepeatMode } from 'react-native-track-player';

const setupPlayer = async () => {
  await TrackPlayer.setupPlayer({
    maxCacheSize: 1024 * 10,
  });

  await TrackPlayer.setVolume(0.03) // not too loud(no demasiado alto)
  await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export const useSetupTrackPlayer = ({onLoad}:{onLoad?: ()=> void}) => {
  const isInitialized = useRef(false); // esto es para que no se ejecute mas de una vez, useRef es para que no se vuelva a renderizar
  
  useEffect(() => {
    setupPlayer().then(()=>{
      isInitialized.current = true; // si se ejecuta una vez, no se ejecuta de nuevo
      onLoad?.(); // si se pasa una funcion, se ejecuta
    })
    .catch((error) => {
      isInitialized.current = false; // si hay un error, se vuelve a ejecutar
      console.error(error);
    })
  }, [onLoad]);
}