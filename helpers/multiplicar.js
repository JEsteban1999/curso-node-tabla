const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(tabla = 5,hasta = 10, listar = false) => {
    try {
        let salida = '', consola = '';
        
        for (let i = 1; i <= hasta; i++) {
            console.log({salida})
            consola += `${tabla} x ${i} = ${tabla*i}\n`;
            salida += `${tabla} x ${i} = ${tabla*i}\n`;
        }
        if (listar) {
            console.log("====================".red)
            console.log(`Tabla del ${tabla} hasta ${hasta}`.red)
            console.log("====================".red)
            console.log(consola.rainbow);
        }
        console.log({ salida })
        fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida)
        return `tabla-${tabla}.txt created`.underline.red;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}