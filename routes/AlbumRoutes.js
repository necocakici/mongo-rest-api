const express = require("express");
const router = express.Router();

const AlbumControls = require("../controllers/AlbumController");
router.get("/", AlbumControls.all);
router.get("/:_id", AlbumControls.find);
router.delete("/", AlbumControls.delete);
router.get("/:_id/albums", AlbumControls.getAllTracks);
router.post("/", AlbumControls.create);
router.put("/", AlbumControls.update);
router.post("/", AlbumControls.createAlbum);

module.exports = router;