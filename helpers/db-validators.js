const Role = require('../models/role');
const Usuario = require('../models/usuario'); //Con la U mayuscula permite crear instancias de mi modelo

const esRoleValido = async( rol = '' ) => {

    //Validamos el rol consultando los roles permitidos en DB
    const existeRole = await Role.findOne({ rol });

    if ( !existeRole ) {
        throw new Error(`EL rol ${ rol } no está registrado en la base de datos`)
    }
}

const emailExiste = async( correo = '' ) => {

    //Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });

    if (existeEmail) {
        throw new Error(`EL correo ${ correo } ya está registrado en la base de datos`);
    }
}

const existeUsuarioPorId = async( id ) => {

    //Verificar si el id existe
    const existeUsuario = await Usuario.findById( id );

    if ( !existeUsuario ) {
        throw new Error(`El id ${ id }no está registrado en la base de datos`);
    }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}

