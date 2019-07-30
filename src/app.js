const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();

const port = process.env.PORT || 4005;

// import schema, { graphql } from "./schema";
const schema = require("./schema");

app.get("/", (req, res) => {
  //   let query = `{ place { title } }`;
  //   graphql(schema, query).then(result => {
  //     res.json(result);
  //   });
  res.send("Node is running");
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: schema.query,
    graphiql: true
  })
);

app.listen(port, () => console.log(`Node server is started: ${port}`));
