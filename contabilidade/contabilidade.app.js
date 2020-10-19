const terminal = require('readline-sync');
const contabilidade =  require('./contabilidade');

function run(){
    contabilidade.menu();
    const opçcaoContabil = parseInt(terminal.prompt());
    if(opçcaoContabil == 1){
        const salario = informarDados("salário");
        console.log("Valor do imposto retido: " +contabilidade.calcularIRPF(salario));
    }
}

function informarDados(dado){
    console.log("Informe o "+ dado);
    const salarioInformado = parseFloat(terminal.prompt());
    return salarioInformado;
}


module.exports = {
    run
}