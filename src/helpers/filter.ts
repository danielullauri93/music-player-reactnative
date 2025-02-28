export const trackTitleFilter = (title: string) => (track: any) => 
  track.title?.toLowerCase().includes(title.toLowerCase())

// trackArtistFilter: Filtra las pistas por el nombre del artista.
// se pone (title: string) => (track: any) => para que sea una función que recibe un string y devuelve otra función que recibe un objeto. se usa dos => para que sea una función de flecha que devuelve otra función de flecha.