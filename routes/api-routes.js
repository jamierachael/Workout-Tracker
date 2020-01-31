const router = require('express').Router();
const db = require("../models");



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

router.put("/workouts/:id", ({ params }, res) => {
    //     db.Workout.update(
    //         {
    //             _id: mongojs.ObjectId(params.id)
    //         },
    //         {
    //             $set: {
    //                 new: true
    //             }
    //         },

    //         (error, edited) => {
    //             if (error) {
    //                 console.log(error);
    //                 res.send(error);
    //             } else {
    //                 console.log(edited);
    //                 res.send(edited);
    //             }
    //         }
    //     );

});


// Test post 

// router.post('/test', function (req, res) {
//     res.send('Got a POST request')
// })

// // // createWorkout POST /api/workouts
// Not yet working  what replaces { new: true }?

router.post("/workouts", ({ body }, res) => {
    //     db.Workout.create(body)
    //         .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
    //         .then(dbWorkout => {
    //             res.json(dbWorkout);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         });

    res.send('Got a POST request')
});











// // getWorkoutsInRange() GET /api/workouts/range

router.get("/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});




module.exports = router;