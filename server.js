const express = require("express");
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

MongoClient.connect('mongodb+srv://admin:admin@cluster0.lfnwc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true
})
    .then(client => {
        console.log('connect to db')
        const db = client.db('crud-app');
        const collections = db.collection('collections')

        app.use(bodyParser.urlencoded({ extended: true }))

        app.listen(3000, () => {
            console.log("port 3000 is working")
        })

        app.get('/', (req, res) => {
            res.sendFile(__dirname + "/index.html")
            const cursor = db.collection('collections').find().toArray()
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.error(error)
            })

        })

        app.post('/collections', (req, res) => {
            collections.insertOne(req.body)
                .then(res => {
                    res.redirect('/')
                })
                .catch(err => {
                    console.log(err)
                })
        })

    })
    .catch(err => {
        console.error(err)
    })