const router = require('express').Router();
const db = require("../models");
// const mongojs = require("mongojs")



// Works! 
// router.get('/test', (req, res) => res.json('Sample API get endpoint'));


// // getLastWorkout() GET /api/workouts

// // can use for "all" maybe
// Works! 
router.get("/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

//  addExercise PUT /api/workouts/ 
// Not yet working
// updating current
router.put("/workouts/:id", ({ params, body }, res) => {
    console.log(body);
    db.Workout.findByIdAndUpdate(

        params.id,
        {
            $push: {
                exercises: body,

            },

        },
        {
            new: true,
            runValidators: true
        }

    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });

});

// // // createWorkout POST /api/workouts
// Not yet working  what replaces { new: true }?

router.post("/workouts", ({ body }, res) => {
    console.log(body);
    db.Workout.create({})
        // .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });

    res.send('Got a POST request')
});


// // getWorkoutsInRange() GET /api/workouts/range

router.get("/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});




module.exports = router;