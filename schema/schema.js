const graphql = require("graphql");
const _ = require("lodash");
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

//dummy data

let books = [
  { name: "Jungle Book", genre: "story", id: "1" },
  { name: "Iron Man", genre: "Sci-Fi", id: "2" },
  { name: "Dominos", genre: "food-store", id: "3" },
  { name: "2012 Movie", genre: "Sci-Fi", id: "4" }
];

const BootType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BootType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return _.find(books,{id:args.id});
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
