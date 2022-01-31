const graphQL = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphQL;

const TaskType = GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString },
  },
});

module.exports = { TaskType };
