const terminal = require('readline-sync');
const calculo = require('./calculoIMC');

function run(){
    calculo.menu();
    let opcaoCalculo = parseInt(terminal.prompt());
    if(opcaoCalculo == 1){    
        let altura = 1;
        let peso = 1;
        while(peso != 0){
            console.log("\n ## Calcular IMC ## \n -----------------------------------\n");
            altura = informarDado("altura");
            peso = informarDado("peso");
            console.log(calculo.calcularIMC(peso, altura));
            
            console.log("\nPara sair digite peso = 0 \n");        
        }
    }
}

function informarDado(dado){
    console.log("Informe a "+ dado);
    return parseFloat(terminal.prompt());
}


module.exports = {
    run
}