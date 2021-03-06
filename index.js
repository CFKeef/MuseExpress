const express = require("express");
const app = express();
const cors = require('cors');
const {db} = require("./db");
const {encounters} = require("./definitelyNotStaticData/encounters");
const {events} = require("./definitelyNotStaticData/events");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Account Routes
app.post("/login", (req, res) => {
    const userInfo = req.body;
    
    if(userInfo.email === "HappyHolidays@MLH.io" && userInfo.pw === "123") {
        res.sendStatus(200);
    } else res.sendStatus(404);
});

// Data routes
app.get("/getUserData", (req, res) => {
    res.send(encounters);
});

app.get("/getEvents", (req, res) => {
    res.send(events);
});

app.listen(19005, () => {console.log("Running!")})