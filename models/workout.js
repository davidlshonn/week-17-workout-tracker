//require in mongoose
const mongoose = require("mongoose");

//initialise a schema
const Schema = mongoose.Schema;

//define a full schema object for the workout entries
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Please select a type of exercise",
      },
      name: {
        type: String,
        required: "Please enter an exercise",
      },
      duration: {
        type: Number,
        required: "Please enter a duration",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

//define the model
const Workout = mongoose.model("Workout", workoutSchema);

//export the model
module.exports = Workout;
