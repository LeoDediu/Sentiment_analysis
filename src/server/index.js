const dotenv = require('dotenv')
const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch')

//MeaningCloud API
dotenv.config()
const api_key = process.env.API_KEY;
console.log(`API key = ${api_key}`);

const app = express()

//Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('dist'))

//Routes
app.post('/meaning', async function(req, res) {
    console.log(req)
    let full_link = `https://api.meaningcloud.com/sentiment-2.1?key=${api_key}&lang=en&txt=${req.body.formText}&model=general`
	const meaning = await fetch (full_link)
	try {
        const receivedData = await meaning.json();
        console.log(receivedData);
        res.send(receivedData);
    } catch (error) {
        console.log('error', error);
    }
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})