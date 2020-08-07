require('dotenv').config()

const express = require('express')
const axios = require('axios')
const { response } = require('express')
const app = express()

let API_KEY = process.env.API_KEY

app.set('view engine', 'ejs')
app.use(express.static('static'))

app.get('/', (req,res) => {
    let qs = {
        params: {
            s: 'Star Wars',
            apikey: API_KEY
        }
    }

    axios.get('http://www.omdbapi.com', qs)
    .then((response) => {
        // console.log(response.data);
        let episodes = response.data.Search
        res.render('home', {episodes})
    })
    .catch(err => {
        console.log(err);

    })
})

app.listen(8000)