const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const port = 3000;
const router = require("./routes/index.js");
const bodyparser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const mongourl =
    "mongodb+srv://CS5610:CS5610@cluster0.wpjqb11.mongodb.net/?retryWrites=true&w=majority";

app.use(express.static(__dirname));

MongoClient.connect(mongourl, (err, db) => {
    if (err) throw err;
    console.log("DB connected");
    db.close();
});

//Allow us to interact and allow express to use middleware
//we can get request body content
app.use(bodyparser.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
    console.log(`Serving on port ${port}`);
});
