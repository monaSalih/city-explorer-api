
const express = require('express');
require('dotenv').config();
const cors = require('cors')
// const brodCast = require('./assets/weather.json')
const server = express();
const PORT = process.env.PORT;
server.use(cors());
const axios = require('axios')

// server.get('/photo', MoviePlayInCity)


class cityWeatherInfo {
    constructor(index) {
        this.date = index.valid_date;
        this.description = index.weather.description
    }
}

class showResultImage {
    constructor(dataStore) {
        this.movImage = dataStore.original_title
        this.title = dataStore.original_title
        this.moviePoster = `https://image.tmdb.org/t/p/w500${dataStore.poster_path}`

    }
}

//localhost:3001/wetherCast?info=namede


server.get('/wetherCast', (req, res) => {
    // console.log(req.query, 'info city');
    let locaName = req.query.info;
    let weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${locaName}&key=${process.env.WEATHER_CITY}`

    
    try {
        axios.get(weatherURL).then ( wetherSer =>  {   
            // res.send(wetherSer.data)
            // console.log(wetherSer.data);
let wetherData=  wetherSer.data.data.map((item) => {
            //    res.send(item);

            return new cityWeatherInfo(item);
                // ;
               
            })
             res.send(wetherData); 
        })
      
    } catch (error) {
        res.send(error)
    }

})
    ///////////////////////////////////////////movie show in 
    //////////localhost:3001/movies?queryCity=
    /////slected city
    // https://api.themoviedb.org/3/search/movie?api_key=0c627e9465b11099d881815e4147eebb&query=seattle
    server.get('/movies', (req,res)=>{
        let photoSlectRe = req.query.queryCity;
        let urlMovie = ` https://api.themoviedb.org/3/search/movie?api_key=${process.env.CITY_MOVIE}&query=${photoSlectRe} `

console.log(photoSlectRe);
        try{

  axios.get(urlMovie).then(mapResult => {
                // console.log(movieData.data);
     let selectedMovie = mapResult.data.results.map(imgWl => {
                    return new showResultImage(imgWl)
                })

                res.send(selectedMovie)
            })
        
        }catch(error){

          res.send(error)
    }
    
})
        
            
      



    server.listen(PORT, () => {
        console.log(`Listning on PORT ${PORT}`)
    })
    server.get('*', (req, res) => {
        res.status(404).send('There is an error try again next time ')
    })