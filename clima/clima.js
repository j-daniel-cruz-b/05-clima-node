const axios = require('axios').default;

const getClima = async(lat, lon) => {

    apiKey = 'bfef5e373e3185a44c615df8b515b7a3';
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(resp => resp)
        .catch(err => console.error(err));

    return resp.data.main.temp;

};

module.exports = {
    getClima
}