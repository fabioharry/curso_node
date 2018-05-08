module.exports = function(app){
 

    app.get('/noticia', function(req, res){
  
      var connection = app.config.dbConnection()
      var noticiasModel = new app.app.models.NoticiasDAO(connection)
      
  
        // fazendo uma consulta
        noticiasModel.getNoticia(function(error, result){
            res.render("noticias/noticia", {noticia : result})
        })
    })
  
  }