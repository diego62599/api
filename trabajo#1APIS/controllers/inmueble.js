const {response} = require('express')

const Inmueble = require ('../models/inmueble')

const inmuebleGet = async(req, res = response) => {
    const {direccion} = req.query

    const inmuebles = await Inmueble.find()

    res.json({
        inmuebles
    })
}

const inmueblePost = async(req, res = response) => {
    const body = req.query
    const inmueble = new Inmueble(body)

    await inmueble.save()

    res.json({
        msg: 'la inserción fue correcta'
    })
}

const inmueblePut = async (req, res = response) => {
    const {direccion, tipo_inmueble, valor_arriendo, ciudad} = req.query
    let mensaje = ''

    try{
        const inmueble = await Inmueble.findByIdAndUpdate ({direccion: direccion}, {valor_arriendo: valor_arriendo, ciudad: ciudad})
        mensaje = 'modificado correctamente'
    }
    catch(e){
        mensaje='Problemas al modificar'
    }

    res.json({
        msg: mensaje
    })
}

const inmuebleDelete = async(req, res = response) => {
    const {direccion} = req.query
    let mensaje= ''

    try{
        const inmueble = await Inmueble.findByIdAndDelete ({direccion: direccion})
        mensaje = 'Eliminado'
    }

    catch(error){
        mensaje = 'Error al eliminar'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    inmuebleGet,
    inmueblePost,
    inmueblePut,
    inmuebleDelete
}
