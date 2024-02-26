var express = require('express') 
var cors = require('cors')
var app = express()               
app.use(cors())
var port = process.env.PORT || 8080  


app.get('/:name', function(req, res) {
  res.json({
    "id":"25",
    "name":"pikachu",
    "base_experience":"112",
    "height":"4",
    "weight":"60",
    "abilities": [
        {
        "name": "lightning-rod"
        }
    ]
})  
})

app.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo!' })   
})

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)