let express = require("express");
let { createHandler } = require("graphql-http/lib/use/express");
let { buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
let schema = buildSchema(`
  type Query {
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int]
  }
`);

// The root provides a resolver function for each API endpoint
let root = {
  quoteOfTheDay() {
    return Math.random() < 0.5 ? "Take it easy" : "Salvation lies within";
  },
  random() {
    return Math.random();
  },
  rollThreeDice() {
    return [1, 2, 3].map((_) => 1 + Math.floor(Math.random() * 6));
  },
};

let app = express();
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at localhost:4000/graphql");

let { ruruHTML } = require("ruru/server");

// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});
