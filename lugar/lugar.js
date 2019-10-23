const axios = require('axios');

const getLugarLatLng = async (dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'eb14fb6308msh6cca30547725dc8p19f45fjsn8263f23b00c0' }
    });

    const rsp = await instance.get();

    if (rsp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = rsp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = { getLugarLatLng }

