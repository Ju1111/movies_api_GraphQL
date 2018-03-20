export const Movie = `
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
`;
