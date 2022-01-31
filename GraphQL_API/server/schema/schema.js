const graphQL = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphQL;

const RootQuery = GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    type: { type: TaskType },
    args: { id: { type: GraphQLString } },
    resolve: (parent, args) => {},
  },
});

const TaskType = GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString },
  },
});

module.exports = { RootQuery, GraphQLObjectType };
