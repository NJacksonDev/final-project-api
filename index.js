import express from "express";
import cors from "cors";
import "dotenv/config";
import { getOneMovie } from "./src/allMovies.js";
import {
  addOneMovie,
  updateOneMovie,
  removeOneMovie,
} from "./src/userSavedMovies.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/movies/:movieId", getOneMovie);

app.post("/usersavedmovies", addOneMovie);
app.patch("/usersavedmovies/:movieId", updateOneMovie);
app.delete("/usersavedmovies/:movieId", removeOneMovie);

app.listen(process.env.PORT, () =>
  console.log(`Listening on http://localhost:${process.env.PORT}...`)
);

// export const api = functions.https.onRequest(app);
