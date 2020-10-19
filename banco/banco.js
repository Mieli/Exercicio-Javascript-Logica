function exibirMensagem(opcao){
    let textMenu = "opção inválida";
    switch(opcao){
        case 1: 
            textMenu =  "Sacar";
            break;
        case 2:
            textMenu = "Depositar";
            break;
        case 3:
            textMenu = "Verificar Saldo";
            break;
        case 4:
            textMenu = "Obrigado por utilizar um dos nossos terminais de auto atendimento";
            break;
        default:
            textMenu = "opção inválida";      
    }
    return textMenu;
}

function menu(){
    let acaoBanco = "\n ## Sistema Bancário ## \n -------------------------------------------\n";
    acaoBanco += "Menu Principal, Selecione opção abaixo: \n";
    acaoBanco += "(1) Sacar \n";
    acaoBanco += "(2) Depositar \n";
    acaoBanco += "(3) Verificar Saldo \n";
    acaoBanco += "(4) Sair  \n";
    console.log(acaoBanco);
}

module.exports = {
    exibirMensagem,
    menu
}