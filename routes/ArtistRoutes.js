const express = require("express");
const router = express.Router();

const ArtistControls = require("../controllers/ArtistController");

router.get("/", ArtistControls.all);
router.get("/:id", ArtistControls.find);
router.post("/", ArtistControls.create);
router.delete("/", ArtistControls.delete);
router.get("/:id/albums", ArtistControls.getAllAlbums);

module.exports = router;