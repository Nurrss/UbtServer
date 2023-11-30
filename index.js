const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("common"));
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(
    "mongodb+srv://nurrsserkul:user@cluster0.feqqegy.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const PORT = 4000;
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get("/", (req, res) => {
  res.json(`hello world`);
});
