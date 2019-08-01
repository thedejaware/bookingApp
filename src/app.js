const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const mongoose = require("mongoose");

// Connect to DB
mongoose
  .connect("mongodb://localhost/BookingDB", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

const port = process.env.PORT || 4005;

app.get("/", (req, res) => {
  res.send("Node is running");
});


const schema = require("./schema");

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: schema.query,
    graphiql: true
  })
);

app.listen(port, () => console.log(`Node server is started: ${port}`));
