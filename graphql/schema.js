const { gql } = require("apollo-server-express");

exports.typeDefs = gql`
  type File {
    file: String!
  }
  type RootQuery {
    files: [String]
  }

  type RootMutation {
    uploadFile(file: Upload!): Boolean
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;
