
// Exemplo de classe
function NoticiasDAO(connection){
    // O _ indica que a variável é interna da classe, ou seja, private
    this._connection = connection 
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    // fazendo uma consulta
    this._connection.query('select * from noticias', callback)
}

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query('select * from noticias where id_noticia = 1', callback)
 }

 NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into noticias set ?', noticia, callback)
    console.log(noticia)
}

module.exports = function(){
    return NoticiasDAO
}

// OBS: Por concençao, o arquivo deve ter o mesmo nome da classe