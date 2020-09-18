const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección para la ciudad a obtener el Clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {

    try {

        let info = await lugar.getLugar(direccion);

        let cl = await clima.getClima(info.lat, info.long);

        return `El clima en ${ info.dirr } es ${cl}`;

    } catch (error) {
        return `No se encontró el clima de ${direccion}`;
    }


};

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(console.log);