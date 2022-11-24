import { userSavedMovies } from "./mongoConnect.js";
import { ObjectId } from "mongodb";

export async function addOneMovie(req, res) {
  await userSavedMovies.insertOne(req.body);
  res.send("Movie was added.");
}

export async function updateOneMovie(req, res) {
  const { movieId } = req.params;
  await userSavedMovies
    .findOneAndUpdate({ _id: new ObjectId(movieId) }, { $set: req.body })
    .catch((err) => {
      res.status(500).send(err);
      return;
    });
  res.send("Movie watch status updated.");
}
export async function removeOneMovie(req, res) {
  const { movieId } = req.params;
  await userSavedMovies.findOneAndDelete({ _id: new ObjectId(movieId) });
  res.status(203).send("Movie removed from list.");
}
