const express= require('express')
const Contenedor = require('./contenedor')
const app= express()
const PORT= process.env.PORT || 8080
const contenedor = new Contenedor('./productos.txt')
(async function() {
    await contenedor.init()

    await contenedor.save({title: 'Hobbit',price: 300,thumbnail: 'https://images.app.goo.gl/J1GYHYs8AuCZFxkG9'})
    await contenedor.save({title: 'caja',price: 200,thumbnail: 'https://images.app.goo.gl/J1GYHYs8AuCZFxkG9'})
    await contenedor.save({title: 'caja2',price: 200,thumbnail: 'https://images.app.goo.gl/J1GYHYs8AuCZFxkG9'})
})();

app.get('/', (req, res)=>{
    res.send("<h1 style= `color: blue;`> Bienvenidos al servidor express </h1>")
})

app.get('/productos', (req, res)=>{
    res.send(contenedor.getAll())
})

app.get('/productosRandom', (req, res)=> {
   // let total_productos= contenedor.this.products).length //Acá no estoy segura de como sacar el total del array
    for(let i=0; i< total_productos; i++){
        const item= Math.floor(Math.random()*3-0)  //saco el número aleatorio
        res.send(contenedor.getById(item)) //lo muestro
    }
})

const server= app.listen(PORT, ()=>{
    console.log(`server listening[ ${PORT}]...`);
})
server.on('error', e=> console.log('Error de server', e))