const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

//Use camel case for Model naming
const workoutSchema = new Schema ({
        day: {
            type: Date,
            default: () => new Date
        },
        exercises: [ 
            {
            type: {
                type: String,
                trim: true,
                required: 'Please enter a type of exercise.'
            },
            name: {
                type: String,
                required: "Please enter an exercise name."
            },
            duration: {
                type: Number,
                required: "Please enter a duration."
            },
            weight: {
                type: Number,
                required: "Please enter a duration."
            },
            reps: {
                type: Number,
                required: "Please enter a duration."
            },
            sets: {
                type: Number,
                required: "Please enter a duration."
            },
        }]
    }
)

const Workouts = mongoose.model("Workout", workoutSchema);

module.exports = Workouts;
