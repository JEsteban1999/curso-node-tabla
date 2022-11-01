const argv = require('yargs')
    .option('t',{
        alias: 'tabla',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Es el limite de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla de multiplicar en consola'

    })
    .check((argv,options) => {
        if (isNaN(argv.t)) {
            throw 'La base ingresada no es un numero';
        }
        return true;
    })
    .check((argv,options) => {
        if (isNaN(argv.h)) {
            throw 'El limite ingresado no es un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;