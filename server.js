
const express = require('express');
require('dotenv').config();
const cors = require('cors')
// const brodCast = require('./assets/weather.json')
const server = express();
const PORT = process.env.PORT;
server.use(cors());
const axios = require('axios')

// server.get('/photo', MoviePlayInCity)


// class cityWeatherInfo {
//     constructor(index) {
//         this.date = index.valid_date;
//         this.description = index.weather.description
//     }
// }

// class showResultImage {
//     constructor(dataStore) {
//         this.movImage = dataStore.original_title
//         this.title = dataStore.original_title
//         this.moviePoster = `https://image.tmdb.org/t/p/w500${dataStore.poster_path}`

//     }
// }

//localhost:3001/wetherCast?info=namede
const getWeatherModul=require("./assets/weather")
server.get('/wetherCast',getWeatherModul)

//////////localhost:3001/movies?queryCity=
const getMovieModul=require("./assets/movie")
server.get('/movies',getMovieModul)
    // https://api.themoviedb.org/3/search/movie?api_key=0c627e9465b11099d881815e4147eebb&query=seattle
 
        
            
      



    server.listen(PORT, () => {
        console.log(`Listning on PORT ${PORT}`)
    })
    server.get('*', (req, res) => {
        res.status(404).send('There is an error try again next time ')
    })