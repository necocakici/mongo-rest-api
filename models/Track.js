const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrackSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  youtubeURL: {
    type: String,
  },
  info: {
    type: String,
  },
  lyricsEN: {
    type: Date,
    required: true
  },
  lyricsTR: {
    type: String,
  },
  //One to Many <- Album
  album: {
    type: Schema.Types.ObjectId,
    ref: "Album",
  },
  //Many to Many <- Producers
  producers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Producer",
    },
  ],
});

module.exports = mongoose.model("Track", TrackSchema);