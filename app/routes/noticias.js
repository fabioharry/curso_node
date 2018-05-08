//var dbConnection = require('../../config/dbConnetion')

module.exports = function(application){
 

  application.get('/noticias', function(req, res){

    var connection = application.config.dbConnection()
    var noticiasModel = new application.app.models.NoticiasDAO(connection)

    noticiasModel.getNoticias(function(error, result){
      res.render("noticias/noticias", {noticias : result})
  })

    
  })

}

// Corrigindo a autenticacao
// ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '{your password}';
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '{your password}';
// SELECT plugin FROM mysql.user WHERE User = 'root';