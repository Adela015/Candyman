const express = require('express');
const app = express();
// const path = require('path');

// Rutas
// app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile((__dirname + '/views/index.html'))
});

// Levantamos el servidor con app.listen, recibe dos parámetros, 
// el PUERTO y opcionalemente un callback que se ejecutará si el seridor se inicia
app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000 <3"));

