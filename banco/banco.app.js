const terminal = require('readline-sync');
const banco = require('./banco');

function run(){
    banco.menu();
    let opcaoBanco = parseInt(terminal.prompt());
    console.log(banco.exibirMensagem(opcaoBanco));
}




module.exports = {
    run
}