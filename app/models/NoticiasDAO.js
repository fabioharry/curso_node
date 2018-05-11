
// Exemplo de classe
function NoticiasDAO(connection){
    // O _ indica que a variável é interna da classe, ou seja, private
    this._connection = connection 
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    // fazendo uma consulta
    this._connection.query('select * from noticias order by data_criacao desc', callback)
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
    this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback)
 }

 NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into noticias set ?', noticia, callback)
    console.log(noticia)
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback)
}

module.exports = function(){
    return NoticiasDAO
}

// OBS: Por concençao, o arquivo deve ter o mesmo nome da classe