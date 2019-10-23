const axios = require('axios');

const getClima = async(lat, lng) => {

    const rsp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=88d122a8b47b5ebdab9df604a8923682&units=metric`);

    return rsp.data.main.temp;

}

module.exports = { getClima }