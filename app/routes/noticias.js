//var dbConnection = require('../../config/dbConnetion')

module.exports = function(application){
 

  application.get('/noticias', function(req, res){
    application.app.controllers.noticias.noticias(application, req, res)
  })

  application.get('/noticia', function(req, res){
    application.app.controllers.noticias.noticia(application, req, res)
  })

}

// Corrigindo a autenticacao
// ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '{your password}';
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '{your password}';
// SELECT plugin FROM mysql.user WHERE User = 'root';