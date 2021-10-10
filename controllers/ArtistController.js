let ArtistModel = require("../models/Artist");

let ArtistController = {
  find: async (req, res) => {
    console.log(`req.params`, req.params)
    try {
      let found = await ArtistModel.find({ _id: req.params.id });
      res.status(200).json(found);
    } catch (err) {
      console.log(`err`, err);
      res.status(400).json({ err: err });
    }
  },
  all: async (req, res) => {
    try {
      let allArtist = await ArtistModel.find();
      res.status(200).json(allArtist);
    } catch (err) {
      console.log(`err`, err);
      res.status(400).json({ err: err });
    }
  },
  create: async (req, res) => {
    let newArtist = new ArtistModel(req.body);
    try {
      //let savedArtist = await newArtist.save();
      let savedArtist = await ArtistModel.create(newArtist);
      res.status(200).json(savedArtist);
    } catch (err) {
      console.log(`err`, err);
      res.status(400).json({ err: err });
    }
  },
  getAllAlbums: async (req, res) => {
    console.log(`req.params`, req.params);
    try {
      let foundArtistsAlbums = await ArtistModel.find({
        id: req.params.id,
      }).populate("albums");
      console.log("foundArtistsAlbums", foundArtistsAlbums);
      res.status(200).json(foundArtistsAlbums);
    } catch (err) {
      console.log(`err`, err);
      res.status(400).json({ err: err });
    }
  },
  delete: async (req, res) => {
    try {
      let { id } = req.body;
      let deletedArtist = await ArtistModel.findByIdAndDelete(id);
      res.status(200).json(deletedArtist);
    } catch (err) {
      console.log(`err`, err);
      res.status(400).json({ err: err });
    }
  },
};

module.exports = ArtistController;
