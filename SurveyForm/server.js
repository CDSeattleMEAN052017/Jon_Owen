var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')

const PORT = 8000

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/static')))

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

// Root Route
app.get('/', function (request, response) {
  response.render('index', {title: 'my Express project'})
})
app.get('/result', function (request, response) {
  response.render('result', {title: 'my Express project'})
})
app.post('/submit', function (request, response) {
  var context = {
    name: request.body.name,
    location: request.body.location,
    language: request.body.language,
    comment: request.body.comment
  }
  response.render('result', context)
})

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`)
})
// npm init -y
// npm install express --save
// npm install ejs --save
// npm install body-parser --save
