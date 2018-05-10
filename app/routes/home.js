module.exports = function(application){

    application.get('/', function(req, res){
      // é o caminho dos diretórios /app/controllers/home
     application.app.controllers.home.index(application, req, res)
    })

}