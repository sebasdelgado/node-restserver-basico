const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controlles/usuarios');

const router = Router();

//Metodo GET para petición, se usa para obtener data
router.get('/', usuariosGet );

//Metodo PUT para petición, se usa en la actulización de la totalidad de la data
//:id es un parámetro de segmento (se envia en la url)
router.put('/:id', usuariosPut );

//Metodo POST para petición, se usa para crear nuevos recursos
router.post('/', usuariosPost );

//Metodo DELETE para petición, se usa para borrar algo o marcarlo como eliminado con alguna bandera
router.delete('/', usuariosDelete );

//Metodo PUT para petición, se usa en la actulización parcial de la data
router.patch('/', usuariosPatch );




module.exports = router;