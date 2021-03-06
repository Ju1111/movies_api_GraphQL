export const Movie = `

  union SearchResult = Movie | TVShow | TVShowEpisode | Company | Person

  interface Media {
    id: ID!
    title: String!
    media_type: String!
  }

  type Movie implements Media {
    id: ID!
    title: String!
    media_type: String!
    release_date: String
    original_language: String
    overview: String
    runtime: Int!
    vote_average: Float
  }

  type TVShow implements Media {
    id: ID!
    title: String!
    media_type: String!
    episodes: [Episode]!
    running: Boolean
  }

  type Person {
    id: ID!
    name: String!
    known_for: [Media]
  }

  type Query {
    movies: [Movie]
    movie(imdb_id: String!): Movie
    search(q: String!): SearchResult
  }
`;
