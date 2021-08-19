const axios=require('axios')
module.exports=getWitherHandler;
function getWitherHandler(req,res){
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
   
   }
class cityWeatherInfo {
    constructor(index) {
        this.date = index.valid_date;
        this.description = index.weather.description
    }
}