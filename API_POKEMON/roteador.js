var router = express.Router()             

//establecemos nuestra primera ruta, mediante get.
router.get('/', function(req, res) {
  res.json({ mensaje: '¡Bienvenido a nuestra API!' })  
})
router.get('/:name', function(req, res) {
    res.json({ mensaje: '¡Bienvenido a nuestra API!' })  
  })
app.use('/api', router)