const express = require("express");
const {
  createRider,
  getRider,
  getRiders,
  deleteRider,
  updateRider,
} = require("../controllers/riderController");
const router = express.Router();

//GET all workouts
router.get("/", getRiders);

//GET a single workouts
router.get("/:id", getRider);

//POST a new workout
router.post("/", createRider);

//DELETE a workout
router.delete("/:id", deleteRider);

//UPDATE a workout
router.patch("/:id", updateRider);

module.exports = router;
