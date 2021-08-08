const express = require("express");
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

MongoClient.connect('mongodb+srv://admin:admin@cluster0.lfnwc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true
})
.then(client => {
    const db = client.db('crud-app');

    app.use()
    app.get()
    app.listen()
    app.post()
})
.catch(err => {
    console.error(err)
})
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log("port 3000 is working")
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/quotes', (req, res) => {
    console.log(req)
    console.log(req.body)
})