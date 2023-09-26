export interface MoviesDataType {
  movies: Movie[]
}

interface Movie {
  title: string
  genre: string[]
  title_english: string
}
