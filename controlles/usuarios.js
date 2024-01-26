const { request, response } = require('express');

const usuariosGet = ( req = request, res = response ) => { // igualamos res a response para que res
                                                // tenga las propiedades de response, lo mismo con request

    //Obtenemos lo query params y desestructuramos cada valor poniendo valores por defecto                                               
    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg : 'get API',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = ( req, res ) => {

    //obtenemos los parametros de segemento
    const id = req.params.id;

    res.json({ //code status Bad Request, los status 400 le dicen
        // al front que algo estan  enviando mal 
        msg : 'put API',
        id
    });

    // res.status(400).json({ //code status Bad Request, los status 400 le dicen
    //                         // al front que algo estan  enviando mal 
    //     msg : 'put API'
    // });
}

const usuariosPost = ( req, res ) => {

    const { nombre, edad } = req.body;

    res.status(201).json({ //code status Created
        msg : 'post API',
        nombre,
        edad
    });
}

const usuariosDelete = ( req, res ) => {
    res.json({
        msg : 'delete API'
    });
}

const usuariosPatch = ( req, res ) => {
    res.json({
        msg : 'patch API'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}