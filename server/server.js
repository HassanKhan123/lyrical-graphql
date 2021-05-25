const express = require('express');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');

const models = require('./models');
const schema = require('./schema/schema');

const app = express();

// Replace with your mongoLab URI
const MONGO_URI =
  'mongodb+srv://HassanKhan123:HassanKhan123@cluster0.d13tg.mongodb.net/lyrical?retryWrites=true&w=majority';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

(async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('mongodb connected');
  } catch (error) {
    console.error(error.message);
    //exit process with failure
    process.exit(1);
  }
})();

app.use(express.json());
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

module.exports = app;
