
function menu(){
    let menuConstrutora = "\n## Sistema Gestão Construtora ## \n";
    menuConstrutora += "-------------------------------------------\n";
    menuConstrutora += "Selecione as opções abaixo: \n";
    menuConstrutora += "(1) Calcular assentamento do piso \n";
    menuConstrutora += "(2) Calcular a metragem cúbida do reboco \n";
    menuConstrutora += "(0) Sair";
    console.log(menuConstrutora)
}

function calcularAreaDoRetangulo(largura, altura){
    if(largura != "" && altura != ""){
        return largura * altura;
    }
    return 0;
}

function calcularValorAssentamentoDoPiso(largura, altura, precoPorMetroQuadrado){
    const area = calcularAreaDoRetangulo(largura, altura);
    if(precoPorMetroQuadrado != ""){
        const valorDaObra = (area * precoPorMetroQuadrado).toFixed(2);
        return "\nA àrea é de: "+ area +"m2 e o valor da Obra é de R$ "+ valorDaObra +"\n"; 
    }
    return "O preço por metro quadrado não foi informado!";
}

function calcularMetragemCubicaDoReboco(largura, altura, profundidadeDoReboco){
    const custoDoReboco = 205.00
    const area = calcularAreaDoRetangulo(largura, altura);
    if(profundidadeDoReboco != ""){
        const volume =  area * profundidadeDoReboco;
        const metroCubido = parseFloat((custoDoReboco * volume)).toFixed(2);
        return "\nA metragem cúbida do reboco é de: "+ volume + "m2 e o valor da Obra é de R$ "+ metroCubido +"\n";
    }
    return "A profundidade do reboco não foi informada!"

}

module.exports = {
    menu,
    calcularValorAssentamentoDoPiso,
    calcularMetragemCubicaDoReboco
}