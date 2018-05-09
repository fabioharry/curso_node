module.exports = function(application){

    application.get('/formulario_inclusao_noticia', function(req, res){
      res.render("admin/form_add_noticia", {validacao: {}, noticia: {}})
    })



    application.post('/noticias/salvar', function(req, res){
     // res.render("admin/form_add_noticia")
     var noticia = req.body

     console.log(noticia)
     //Validação de campos fomulário
     req.assert('titulo', 'Título é obrigatório').notEmpty()
     req.assert('resumo','Resumo é obrigatório').notEmpty()
     req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100)
     req.assert('autor','Autor é obrigatório').notEmpty()
    //req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'})
     req.assert('data_noticia', 'Data').notEmpty().isISO8601({format: 'YYYY-MM-DD'})
     req.assert('noticia','Noticia é obrigatório').notEmpty()

      var erros = req.validationErrors()
      console.log(erros)

      if(erros){
        res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia})
        return
      }

      // Conexão
      var connection = application.config.dbConnection()
      // Model
      var noticiasModel = new application.app.models.NoticiasDAO(connection)
      
      //Salvar noticia
       noticiasModel.salvarNoticia(noticia, function(error, result){
      // res.render("noticias/noticias", {noticias : result})
        res.redirect('/noticias')
    })

    // function isValidDate(value) {
    //   if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return false;
    //   const date = new Date(value);
    //   if (!date.getTime()) return false;
    //   return date.toISOString().slice(0, 10) === value;
    //   }

    })
    

}


  