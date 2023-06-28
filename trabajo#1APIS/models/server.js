const express = require ('express')
const{dbConnection}= require('../database/config') 

class Server {
    
    constructor(){
        this.app = express()
        this.port = process.env.PORT 
        this.datoPath = '/api/dato'
        this.inmueblePath = '/api/inmueble'
        this.middlewares()
        this.routes()
        this.conectarDB()
    }

    listen(){
        this.app.listen(this.port,() => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(express.static(__dirname + "/public"));
    }

    routes(){
        this.app.use(this.datoPath, require('../routes/datos'));
        this.app.use(this.inmueblePath, require('../routes/inmuebles'))
    }

    async conectarDB(){
        await dbConnection()
    }
}

module.exports = Server