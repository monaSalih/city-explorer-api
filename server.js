
const express = require('express');
require('dotenv').config();
const cors = require('cors')
const brodCast = require('./assets/weather.json')
const server = express();
const PORT = process.env.PORT;
server.use(cors());

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

server.get('*', (req, res) => {
    res.status(404).send('There is an error try again next time ')
})



server.listen(PORT, () => {
    console.log(`Listning on PORT ${PORT}`)
})