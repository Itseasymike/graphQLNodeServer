import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
} from 'graphql';

import userModel from './types/users';

// var mutations = require('./mutations');
// var queries = require('./queries/SingleUserQuery');
let count = 0;
const Query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    count: {
      type: GraphQLInt,
      resolve: function() {
        return count;
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: Query
  // mutation: new GraphQLObjectType({
  //   name: 'Mutation',
  //   fields: mutations
  // })
});

export default schema;
