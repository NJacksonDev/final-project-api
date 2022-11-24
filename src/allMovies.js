import { allMovies } from "./mongoConnect.js";
import { ObjectId } from "mongodb";

export async function getOneMovie(req, res) {
  const { movieId } = req.params;
  const singleMovie = await allMovies
    .find({ _id: new ObjectId(movieId) })
    .toArray();
  res.send(singleMovie);
}
