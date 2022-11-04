const express = require('express');
const {graphqlHTTP}= require('express-graphql');
const schema = require('./schema/schema');
require('dotenv').config();
const conn = require('./config/db');
const port = process.env.PORT || 5000;
const app = express();

conn();
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'dev'
}))
app.listen(port, console.log(`the server is running on port ${port}`));