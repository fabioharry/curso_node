var express = require('express')
//var msg = require('./mod_teste')
var consign = require('consign')
var bodyParser = require('body-parser')

var app = express()

//Estamos informando ao express que o EJS fará a rederização
app.set('view engine', 'ejs')
app.set('views', './app/views')

// Deve ficar andas dos includes de modulos
app.use(bodyParser.urlencoded({extended: true}))

// Deve ser chamado depois do express
consign()
    .include('app/routes')
    .then('config/dbConnection.js') //Carregando modulos
    .then('app/models')
    .into(app)

module.exports = app