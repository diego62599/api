const {Schema, model} = require ('mongoose')

const DatoSchema = Schema ({
    documento: {
        type: Number,
        required: [true, 'El campo documento es requerido']
    },

    tipo_documento: {
        type: String,
        required: true,
        enum: ['CC', 'NIT', 'CE']
    },

    fecha_nacimiento: {
        type: String,
        required: [true, 'la fecha de nacimiento no puede ser superior a la fecha actual.']
    },

    celular: {
        type: Number,
        required: [true, 'El campo celular es requerido']
    }
})


module.exports = model('Dato', DatoSchema) 