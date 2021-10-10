const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//Routes
const artistRoutes = require('./routes/ArtistRoutes')
const albumRoutes = require('./routes/AlbumRoutes')
//const trackRoutes = require('./routes/authRoutes')
//const producerRoutes = require('./routes/authRoutes')
//const coverURLRoutes = require('./routes/authRoutes')

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB!"))
  .catch((err) => console.log(`err`, err));

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`listening on ${PORT}`));

app.use('/artists',artistRoutes)
app.use('/albums',albumRoutes)

app.get("/", (req, res) => res.send("SELAM"));
