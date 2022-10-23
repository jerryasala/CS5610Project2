const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const port = 3000;
const bodyparser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongourl = "mongodb+srv://CS5610:CS5610@cluster0.wpjqb11.mongodb.net/?retryWrites=true&w=majority";

app.use(express.static(__dirname));

const homePageFileName = 'index.html';
const dashboardFileName = 'dashboard.html';
const homeurl = path.join(__dirname, 'public', 'index.html');
const dashurl = path.join(__dirname, 'public', 'dashboard.html');
const userurl = path.join(__dirname, 'public', 'user.html');

MongoClient.connect(mongourl, (err,db)=> {
    if(err) throw err;
    console.log('DB connected');
    db.close();
});

//Allow us to interact and allow express to use middleware
//we can get request body content
app.use(bodyparser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    console.log('HomePage');
    res.sendFile(homeurl);
})


app.get('/dashboard', (req, res) => {
    res.sendFile(dashurl);
})

app.post('/dashboard', (req, res) => {
    console.log(req.body);
    // res.send(`The workout you want to do is: ${req.body.workoutType}` );
})

app.get('/users/:id', (req, res) => {
    res.send(`${req.params.id}`);
})

 app.listen(port, () => {
    console.log(`Serving on port ${port}`)
 })    