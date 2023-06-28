const {Schema, model} = require ('mongoose')

const InmuebleSchema = Schema ({
    direccion: {
        type: String,
        required: [true, 'El campo dirección es requerido']
    },

    tipo_inmueble: {
        type: String,
        required: true,
        enum: ['Apartamento', 'Casa', 'Local']
    },

    valor_arriendo: { 
        type: Number,
        min: 800000, max: 4000000, 
        required: true 
    },

    ciudad: {
        type: String,
        required: true,
        enum: ['Medellin', 'Bello', 'Envigado']
    }
})

module.exports = model('Inmueble', InmuebleSchema) 