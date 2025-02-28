import { FlatList, Text, View, FlatListProps } from 'react-native';
// FlatListProps<T> es un tipo genérico en React Native que define todas las propiedades que puedes pasarle a un FlatList.
//Por ejemplo, si T fuera string, podrías pasar props como data, renderItem, etc.
import library from '@/assets/data/library.json';
import { TrackListItem } from './TrackListItem';
import { utilStyles } from '@/styles';

export type TracksListProps = Partial<FlatListProps<unknown>> & {
  tracks: any[]
}
// FlatListProps<unknown>: Indica que esta FlatList puede contener datos de cualquier tipo (unknown).
// Partial<...>: Convierte todas las props de FlatListProps en opcionales, es decir, el componente puede recibir cualquier combinación de props sin obligación de definir todas.

const ItemDivider = () => (
  <View style={{ ...utilStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}></View>
)
export const TrackList = ({ tracks, ...flatlistProps }: TracksListProps) => {
  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
      ItemSeparatorComponent={ItemDivider}
      ListFooterComponent={ItemDivider}
      renderItem={({ item: track }) => (
        <TrackListItem
          track={{
            ...track,
            image: track.artwork
          }}
        />
      )}
      {...flatlistProps}
    />
  )
}