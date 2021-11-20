# Workout Tracker

## Links

GitHub Repository: https://github.com/chris-noriega14/Workout_Tracker

Heroku Live Link of Deployed Application: https://still-escarpment-21472.herokuapp.com/

## Description
The workout tracker is a useful application where a user can log a number of exercises to a workout. The exercise info includes exercise type, name, duration, weight, reps, and sets.

In the home page, the user has a choice to continue their current workout or create a new workout.

If the user clicks the new workout, this adds a new workout with the capability to add as many exercises as they want to. This is achieved by creating a new exercise and clicking add exercise. Once the user has completed the workout, they would choose the complete button. Once the workout is complete, they can look at the statistics of their past 7 workouts in the dashboard section.

If the user clicks continue workout from the home page, the user continues the last workout that they inputted. They can then add as many exercises as they want, then complete the workout. The statistics of their last workout will then be logged in the Dashboard section.

When the user clicks on Dashboard in the Navigation Bar the Workout Dashboard will display two graphs: One logging the total workout duration in minutes and one logging the total weight lifted per workout. Each graph displays the information of the last 7 workouts.

The user can also access the last 7 workouts using the /api/workouts/ filepath extension.