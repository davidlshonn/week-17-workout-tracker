//require in express router and path
const router = require("express").Router();
const path = require("path");

// router get request which returns the exercise html file when user visits /exercise
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

// router get request which returns states.html when the user visits /stats
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

//export router
module.exports = router;