module.exports = function(application){

    application.get('/formulario_inclusao_noticia', function(req, res){
      res.render("admin/form_add_noticia")
    })

    application.post('/noticias/salvar', function(req, res){
     // res.render("admin/form_add_noticia")
     var noticia = req.body
    

      // Conexão
      var connection = application.config.dbConnection()
      // Model
      var noticiasModel = application.app.models.noticiasModel
      
      //Salvar noticia
       noticiasModel.salvarNoticia(noticia, connection, function(error, result){
      // res.render("noticias/noticias", {noticias : result})
        res.redirect('/noticias')
    })

    

    })


}