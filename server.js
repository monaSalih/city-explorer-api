'use strict'

const express=require('express');
require('dotenv').config();
const server=express();
const cors = require('cors')
const brodCast=require('./assets/weather.json')
const PORT=process.env.PORT;

server.use(cors());



//localhost:3001/wetherCast?reqName=venusaur
server.get('/wetherCast',(req,res)=>{
 console.log(req.query);
 let locaName=req.query.reqName  
 let wetherData=brodCast.results.find(info=>{
        if (info.city_name.toLowerCase()===locaName){
            return info
        }
        res.send(wetherData)
    })
})

server.listen(PORT,()=>{
    console.log(`listning to port${PORT}`);
})