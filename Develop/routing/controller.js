//Import express router
const router = require ('express').Router();
//Import workout model
const Workout = require("../models/workout");
//Work on routes described by api (1 post, 2 gets, 1 put, 1 delete)
//if post fails, adjust body to req.
router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
      .then(postWorkout => {
        res.json(postWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration",
            },
        },
    }])
      .limit (7)
      .then(totalWeight => {
        res.json(totalWeight);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration",
            },
        },
    }])
      .sort({ _id: -1 })
      .limit (7)
      .then(totalDuration => {
        res.json(totalDuration);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,{
            $push:{
                exercises: body
            }
        },
        {new: true, runValidators: true}
    )
      .then(updateWorkout => {
        res.json(updateWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.delete("/api/workouts/:id", ({ body }, res) => {
    Workout.findByIdAndDelete(body._id)
      .then(deleteWorkout => {
        res.json(deleteWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router;