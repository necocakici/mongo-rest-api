const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoverURLSchema = new Schema({
  url: {
    type: String
  },
  album:{
    type: Schema.Types.ObjectId,
    ref: 'Album'
  }
});

module.exports = mongoose.model("CoverURL", CoverURLSchema);
