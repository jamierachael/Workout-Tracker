// const router = require('express').Router();
// const db = require("../models");



// router.get('/', (req, res) => res.json('Sample API get endpoint'));


// // getLastWorkout() GET /api/workouts

// // can use for "all" maybe
// router.get("/workouts", (req, res) => {
//     db.Workout.find({})
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

// // // addExercise PUT /api/workouts/ 

// router.put("/workouts/:id", ({ params }, res) => {
//     db.Workout.update(
//         {
//             _id: mongojs.ObjectId(params.id)
//         },
//         {
//             $set: {
//                 continue: true
//             }
//         }

//             .then(result => {
//                 res.json(result);
//             })
//             .catch(error => {
//                 res.json(error);
//             })
//     );
// });


// // // createWorkout POST /api/workouts

// router.post("/workouts", ({ body }, res) => {
//     db.Workout.create(body)
//         .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

// // getWorkoutsInRange() GET /api/workouts/range

// router.get("/workouts/range", (req, res) => {
//     db.Workout.find({})
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });




// module.exports = router;