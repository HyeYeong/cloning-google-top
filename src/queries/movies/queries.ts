import { gql } from '@apollo/client'

export const Movies = gql`
  fragment movie on Movies {
    id
    url
    title
    title_english
    year
    genres
  }
`

export const GET_MOVIE = gql`
query GetMovie {
  data {
    movies {
      ${Movies}
    }
  }
}
`;
