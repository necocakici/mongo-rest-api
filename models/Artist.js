const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
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
  //Birden fazla Albümü olacak - One to Many Albums
  albums:[{
    type: Schema.Types.ObjectId,
    ref: 'Album'
  }]
});

module.exports = mongoose.model('Artist', ArtistSchema);


