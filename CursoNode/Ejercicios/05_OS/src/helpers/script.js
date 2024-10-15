const os = require('os')
/**
 * @description: funcion que me devuelva un array con la arquitectura y plataforma del sistema
 */
const infoSO = () => {
    const datainfo = [
        { name: 'plataforma: ', value: os.platform() },
        { name: 'freememory', value: os.freemem()},
        { name: 'CPUs', value: os.cpus()},
        { name: "Hostname", value: os.hostname()}
    ]
    return datainfo;
}


module.exports = { infoSO }