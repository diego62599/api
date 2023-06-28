const {response} = require('express')

const Dato = require ('../models/dato')

const datoGet = async(req, res = response) =>{
    const {documento} = req.query
    const datos = await Dato.find()

    res.json({
        datos
    })
}

const datoPost = async(req, res = response) =>{
    const body = req.query
    const dato = new Dato(body)

    await dato.save()

    res.json({
        msg: 'La inserción fue correcta'
    })

}

const datoPut = async(req, res = response) =>{

    const {documento, tipo_documento, fecha_nacimiento, celular} = req.query
    let mensaje = ''

    try{
        const dato = await Dato.findByIdAndUpdate ({documento: documento}, {tipo_documento: tipo_documento, celular: celular})
        mensaje = 'La modificación fue exitosa'
    }
    
    catch(e){
        mensaje = 'Error al modificar'
    }

    res.json({
        msg: mensaje
    })
}

const datoDelete = async(req, res = response) =>{

    const {documento} = req.query
    let mensaje = ''

    try{
        const dato = await Dato.findByIdAndDelete ({documento: documento})
        mensaje = 'La eliminación fue correcta'
    }

    catch(error){
        mensaje = 'Hubo error'
    }

    res.json({
        msg: mensaje
    })

}

module.exports = {
    datoGet,
    datoPost,
    datoPut,
    datoDelete

}