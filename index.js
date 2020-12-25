const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Account Routes
app.post("/signup", (req, res) => {
    const userInfo = req.body;
    
});

// Data routes
app.get("/getUserData", (req, res) => {

});

app.listen(19005, () => {console.log("Running!")})