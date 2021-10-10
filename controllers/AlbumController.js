let AlbumModel = require("../models/Album");
let ArtistModel = require("../models/Artist");

let AlbumController = {
  createAlbum: async (req, res) => {
    const { artistId, album } = req.body;
    AlbumModel.create(album).then((docAlbum) => {
      ArtistModel.findByIdAndUpdate(
        artistId,
        { $push: { albums: docAlbum[0]._id } },
        { new: true, useFindAndModify: false }
      );
    });
  },
  find: async (req, res) => {
    try {
      let found = await AlbumModel.find({ _id: req.params._id });
      res.status(200).json(found);
    } catch (err) {
      console.log(`err`, err);
      res.status(400).json({ err: err });
    }
  },
  all: async (req, res) => {
    try {
      let allAlbums = await AlbumModel.find();
      res.status(200).json(allAlbums);
    } catch (err) {
      console.log(`err`, err);
      res.status(400).json({ err: err });
    }
  },
  create: async (req, res) => {
    const { artistId } = req.body;
    let newAlbum = new AlbumModel(req.body);
    try {
      //let savedAlbum = await newAlbum.save();
      let savedAlbum = await AlbumModel.create(newAlbum);
      if (savedAlbum) {
        const albumId = savedAlbum._id;
        let updatedArtist = await ArtistModel.findByIdAndUpdate(artistId, {
          $push: { albums: albumId },
        });
        res.status(200).json(savedAlbum);
      }
    } catch (err) {
      console.log(`err`, err);
      res.status(400).json({ err: err });
    }
  },
  update: async (req,res) => {
    const album = req.body;
    try {
      let updatedAlbum = await AlbumModel.findByIdAndUpdate(album._id, album);
      res.status(200).json(updatedAlbum);
    } catch (err) {
      console.log(`err`, err);
      res.status(400).json({ err: err });
    }
  },
  getAllTracks: async (req, res) => {
    try {
      let foundAlbumsTracks = await AlbumModel.find({
        _id: req.params._id,
      }).populate("tracks");
      res.status(200).json(foundAlbumsTracks);
    } catch (err) {
      console.log(`err`, err);
      res.status(400).json({ err: err });
    }
  },
  delete: async (req, res) => {
    try {
      let { id } = req.body;
      let deletedAlbum = await AlbumModel.findByIdAndDelete(id);
      res.status(200).json(deletedAlbum);
    } catch (err) {
      console.log(`err`, err);
      res.status(400).json({ err: err });
    }
  },
};

module.exports = AlbumController;
