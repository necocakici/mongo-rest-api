const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  info: {
    type: String,
  },
  rate: {
    type: Number,
  },
  isSingle: {
    type: Boolean,
    required: true,
  },
  //One to Many <- Artist
  artist: {
    type: Schema.Types.ObjectId,
    ref: "artist",
  },
  //One To Many -> Tracks
  tracks: [
    {
      type: Schema.Types.ObjectId,
      ref: "track",
    },
  ],
  //One To Many -> CoverURL
  coverURLs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cover",
    },
  ],
});

module.exports = mongoose.model("Album", AlbumSchema);

/*
//Many To Many -> Labels
*/
