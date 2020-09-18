const axios = require('axios').default;


const getLugar = async(dirr) => {

    const encodeUrl = encodeURI(dirr);

    const resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeUrl}.json?`, {
            params: {
                access_token: 'pk.eyJ1IjoiamRjYjE4MTMxMjI5IiwiYSI6ImNrZjdrdzYybDAwY2Uyd280MmZuZDVqdWkifQ.28qj-8-3AvIi2gStpDVeaA'
            }
        }).then(resp => resp)
        .catch(err => console.error(err));

    if (resp.data.features.lenght === 0) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = resp.data.features[0];
    dirr = data.place_name;
    const lat = data.geometry.coordinates[1];
    const long = data.geometry.coordinates[0];

    return {
        dirr,
        lat,
        long
    }
};


module.exports = {
    getLugar
}