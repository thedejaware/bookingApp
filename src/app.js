const express = require("express");
const bodyParser = require('body-parser');
const graphqlHTTP = require("express-graphql");
const app = express();
const PlaceController = require("./controllers/place.controller");
const OwnerController = require("./controllers/owner.controller");
const TenantController = require("./controllers/tenant.controller");
const mongoose = require("mongoose");

// Connect to DB
mongoose
  .connect("mongodb://localhost/BookingDB", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

const port = process.env.PORT || 4005;

// import schema, { graphql } from "./schema";
const schema = require("./schema");

//To parse JSON data, we are using body-parser
//body-parser middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  //   let query = `{ place { title } }`;
  //   graphql(schema, query).then(result => {
  //     res.json(result);
  //   });
  res.send("Node is running");
});

app.post("/api/places/create", PlaceController.createPlace);
app.post("/api/owners/create", OwnerController.createOwner);
app.post("/api/tenants/create", TenantController.createTenant);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: schema.query,
    graphiql: true
  })
);

app.listen(port, () => console.log(`Node server is started: ${port}`));
