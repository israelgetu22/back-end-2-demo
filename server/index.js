const express = require("express");
const cors = require("cors");

const {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("./controller.js");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/movies", getMovies);
app.post("/api/movies", createMovie);
app.put("/api/movies/:id", updateMovie);
app.delete("/api/movies/:id", deleteMovie);

const SERVER_PORT = 4004;
app.listen(SERVER_PORT, () => {
  console.log(`Docked at port ${SERVER_PORT}`);
});
