import express from "express";
const app = express();
const port = 3001;
import { QueryPayload } from '@my-namespace/simple-shared-data';
import { eventsRoute } from "./Events";

export const routes = express.Router();

routes.use(eventsRoute);

routes.use((_req, res, next) => {
  // Allow any website to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Continue to next middleware
  next();
});

app.use(routes);

app.get("/", (_req, res) => {
  const responseData: QueryPayload = {
    payload: "Server data returned successfully LOL",
  };

  res.json(responseData);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
