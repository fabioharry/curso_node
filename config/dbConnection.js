 // Importando o modulo do Mysql
 var mysql = require('mysql')

var connMySQL = function(){
        console.log('Conexao com db foi estabelecida')
        // fazendo a conexao
        return mysql.createConnection({
            host : 'localhost',
            port : '3306',
            user : 'root',
            password : '1234',
            database : 'portal_noticias'
            })

}

// Estamos retornando a conexao desta forma, para nao ficar fazendo a conexao ao iniciar a pagina
 module.exports = function() {
    return connMySQL
}