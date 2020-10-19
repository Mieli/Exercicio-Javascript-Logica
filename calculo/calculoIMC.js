function calcularIMC(peso, altura){
    let imc = peso / (altura * altura);
    return parseFloat(imc.toFixed(2));
}

function menu(){
    let menuCalculo = "\n ## Bem Vindo ao Sistema de Calculo IMC ## \n -------------------------------------------\n";
    menuCalculo += "Selecione as opções abaixo: \n";
    menuCalculo += "(1) Calcular IMC \n";
    menuCalculo += "(0) Sair";
    console.log(menuCalculo);
}

module.exports = {
    menu,
    calcularIMC
}