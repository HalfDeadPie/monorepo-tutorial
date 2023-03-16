import express from "express";
const app = express();
const port = 3001;
import { QueryPayload } from '@my-namespace/simple-shared-data';
import { eventsRoute } from "./events";

export const routes = express.Router();

routes.use(eventsRoute);

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
