const axios=require('axios')
module.exports=getMovieHandler;


   function getMovieHandler (req,res){
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

}


class showResultImage {
    constructor(dataStore) {
        this.movImage = dataStore.original_title
        this.title = dataStore.original_title
        this.moviePoster = `https://image.tmdb.org/t/p/w500${dataStore.poster_path}`

    }
}