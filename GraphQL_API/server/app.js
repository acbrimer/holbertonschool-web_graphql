const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const mongoConnectionString = require('./mongoConnectionString');

const schema = require('./schema/schema');

const app = express();

mongoose.connect(mongoConnectionString);
mongoose.connection.once('open', () => console.log('connected to database'));

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});
