import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { buildSchema } from "graphql";
import cors from "cors";

// Define GraphQL schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Define resolvers
const root = { hello: () => "Hello, GraphQL with graphql-http!" };

// Initialize Express
const app = express();

app.use(cors());

// Use graphql-http middleware
app.all("/graphql", createHandler({ schema, rootValue: root }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`🚀 Server running at http://localhost:${PORT}/graphql`);
});
