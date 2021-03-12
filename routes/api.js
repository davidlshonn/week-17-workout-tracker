//require in express router and the model for the workout
const router = require("express").Router();
const Workouts = require("../models/workout");

//post request on /api/workouts which creates a working
router.post("/api/workouts", ({ body }, res) => {
  Workouts.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//put request on /api/workouts/:id which will find a workout by id and update
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workouts.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((workoutAdded) => {
      res.json(workoutAdded);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//get request on /api/workouts which will get all workouts
router.get("/api/workouts", (req, res) => {
    Workouts.aggregate([
        {
            $addFields:{
                totalDuration: {
                    $sum: '$exercises.duration'
                },
            },
        },
    ]).then((workoutAggregation) => {
        res.json(workoutAggregation);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

//get request on /api/workouts/range which will get an aggregate of workouts
router.get("/api/workouts/range", (req, res) => {
    Workouts.aggregate([
        {
            $addFields:{
                totalDuration: {
                    $sum: '$exercises.duration'
                },
            },
        },
    ]).limit(7).then((workoutAggregation) => {
        res.json(workoutAggregation);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

//export router
module.exports = router;
