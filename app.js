const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
console.log(argv.t);
crearArchivo(argv.t,argv.h,argv.l)
    .then((msg) => {
        console.log(msg);
        console.log("Creado correctamente".green);
    })
    .catch((err) => {
        console.log(err);
        console.log("Ha sucedido un error");
    })
