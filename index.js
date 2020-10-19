const terminal = require('readline-sync');
const contrutora = require('./construtora/construtora.app');
const escola = require('./escola/escola.app');
const calculo = require('./calculo/calculoIMC.app');
const banco = require('./banco/banco.app');
const contabilidade = require('./contabilidade/contabilidade.app');

function menuGeral() {
    let menuGeral = "\n ######  SGE - Menu Principal ######### \n";
    menuGeral += "Escolha a opção de acesso ao sistema \n";
    menuGeral += "(1) Sistema Construtora \n";
    menuGeral += "(2) Sistema Escolar \n";
    menuGeral += "(3) Sistema Calculo \n";
    menuGeral += "(4) Sistema Bancário \n"
    menuGeral += "(5) Sistema Contábil \n";
    menuGeral += "(0) Sair do sistema \n";
    console.log(menuGeral);
}

function obterOpcao() {
    const opcao = parseInt(terminal.prompt());
    if (opcao < 0 || opcao == "") {
        return "Opção inválida!";
    }
    return opcao
}

function logoff() {
    console.log("## Você saiu do sistema! ##")
}

function main() {
    menuGeral();
    let opcaoMain = obterOpcao();
    while (opcaoMain > 0) {
        switch (opcaoMain) {
            case 1:
                contrutora.run();
                break;
            case 2:
                escola.run();
                break;
            case 3:
                calculo.run();
                break;
            case 4:
                banco.run();
                break;
            case 5:
                contabilidade.run();
                break; 
        }
        menuGeral();
        opcaoMain = obterOpcao();
    }
    logoff();

}


main();
