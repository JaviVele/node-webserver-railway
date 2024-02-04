require('dotenv').config()
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials', function (err) {});

//Servir contenido estatico
app.use( express.static('public') );

app.get('/', function (req, res){
    res.render('home', {
        nombre: 'Javier Velez',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', function (req, res){
    res.render('generic', {
        nombre: 'Javier Velez',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', function (req, res){
    res.render('elements', {
        nombre: 'Javier Velez',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', function (req, res){
    res.sendFile(__dirname + '/public/generic.html');
})

app.get('/elements', function (req, res){
    res.sendFile(__dirname + '/public/elements.html');
})


app.get('/hola-mundo', function (req, res) {
  res.send('Hola mundo desde su respectiva ruta')
});

app.get('*', function (req, res) {
  res.sendFile(__dirname +'/public/404.html');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })