const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProducerSchema = new Schema({
  realName: {
    type: String,
  },
  stageName: {
    type: String,
    required: true,
  },
  shortBio: {
    type: String,
  },
  birthDate: {
    type: Date,
  },
  twitterUsername: {
    type: String,
  },
  instagramUsername: {
    type: String,
  },
  //Birden fazla Track olacak -> Many to Many Tracks
  tracks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Track",
    },
  ],
});

module.exports = mongoose.model("Producer", ProducerSchema);
