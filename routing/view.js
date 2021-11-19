const router = require ('express').Router();
const path = require ('path');

//Get the htmls and link to an endpoint to render the front-end display and everything tied to it
router.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

router.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})

router.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

module.exports = router;