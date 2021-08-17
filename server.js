
const express = require('express');
require('dotenv').config();
const cors = require('cors')
const brodCast = require('./assets/weather.json')
const server = express();
const PORT = process.env.PORT;
server.use(cors());
const axios = require('axios')

server.get('/photo',MoviePlayInCity)

//localhost:3001/wetherCast?info=namede
server.get('/wetherCast', (req, res) => {
    console.log(req.query,'info city');
    let locaName = req.query.info;
    console.log(brodCast,'brodCast info');
    let wetherData = brodCast.find(info => {
        // console.log(info.city_name,);
        if (info.city_name.toLowerCase() === locaName) {
        console.log(locaName,'local name result');
            return info;
        }
    })
    res.send(wetherData);
    // console.log(wetherData[0]);
    ///test
})
///////////////////////////////////////////movie show in slected city
  // https://api.themoviedb.org/3/search/movie?api_key=0c627e9465b11099d881815e4147eebb&query=seattle

//////////localhost:3001/movieOnCity?info=
 function  MoviePlayInCity(req, res){
let photoSlectRe=req.query.queryCity;
let url=` https://api.themoviedb.org/3/search/movie?api_key=${process.env.CITY_MOVIE}&query=${photoSlectRe} `
try
{
  
     axios.get(url).then((mapResult)=>{
    console.log(movieData.data);
let selectedMovie=mapResult.data.map(imgWl=>{
    return new classmovie(imgWl)
})

res.send(selectedMovie)
})
    }
catch(error){

    res.send(error)
}
}
class showResultImage{
    constructor (dataStore){
        this.movImage=dataStore.original_title
        this.title=dataStore.original_title
        this.moviePoster=dataStore.poster_path

    }
}
 

 
server.listen(PORT, () => {
    console.log(`Listning on PORT ${PORT}`)
})
server.get('*', (req, res) => {
    res.status(404).send('There is an error try again next time ')
})