const router = require("express").Router();
const Workout= require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
  Workout.find({}).then(dbWorkout => {
     console.log(dbWorkout);
    res.json(dbWorkout);

    });
  });

  router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(8).then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put("/api/workouts/:id",(req, res) =>{
  Workout.findByIdAndUpdate(req.params.id,{$push:{exercises:req.body}},{new:true})
  .then(dbWorkout => {
      res.json(dbWorkout)
  })
  .catch(err => {
      res.json(err);
  });
});

router.post("/api/workouts",(req, res) => {
  console.log("adding an excerice route ******")
  Workout.create({})
  .then(dbWorkout => {
      console.log("workout add %%%%")
      res.json(dbWorkout);
  })
  .catch(err => {
      res.json(err);
  })
})

module.exports = router;


