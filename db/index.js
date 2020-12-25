const mongoose = require("mongoose");
const {connString} = require("../env");

mongoose.connect(connString, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
   console.log("we're connected!");
});

module.exports={db};