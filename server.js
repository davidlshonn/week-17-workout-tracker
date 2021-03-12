//require in express and mongoose
const express = require("express");
const mongoose = require("mongoose");

//set up the port
const PORT = process.env.PORT || 3000;

//initialise your express server
const app = express();

//add middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//set up mongoose connections
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout-tracker", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//assign routes to your express server (both api and views)
app.use(require("./routes/api"));
app.use(require("./routes/views"));

//set up app.listen
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });