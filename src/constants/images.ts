import unknownArtistImage from '../../assets/unknown_artist.png';
import unknownTrackImage from '../../assets/unknown_track.png';
import {Image} from 'react-native';

export const unknownTrackImageUri = Image.resolveAssetSource(unknownTrackImage).uri; // resolveAssetSource es una función de react-native que resuelve la ruta de la imagen.
export const unknownArtistImageUri = Image.resolveAssetSource(unknownArtistImage).uri;