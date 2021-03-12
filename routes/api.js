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
  Workouts.findAll({}).then.catch((err) => {
    res.status(400).json(err);
  });
});

//get request on /api/workouts/range which will get a range of workouts
router.get("/api/workouts/range", (req, res) => {
  Workouts.findRange({}).then.catch((err) => {
    res.status(400).json(err);
  });
});

//delete on api/workouts that will delete by an id coming in on the body
router.delete("/api/workouts", (req, res) => {
  Workouts.deleteById.catch((err) => {
    res.status(400).json(err);
  });
});

//export router
module.exports = router;
