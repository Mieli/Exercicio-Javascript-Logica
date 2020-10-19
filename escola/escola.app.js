const terminal = require('readline-sync');
const escola = require('./escola');

function run() {
    escola.menu();
    let opcao = parseInt(terminal.prompt());
    while(opcao != 0){
        if(opcao == 1){
           console.log("## Calcular a média e verificar a situação do aluno ## \n -------------------------------------------\n");
           const nota1 = informarNota("primeira nota");
           const nota2 = informarNota("segunda nota");
           const nota3 = informarNota("terceira nota");
           console.log(escola.calcularMedia(nota1, nota2, nota3)); 
        }
        console.log("Deseja realizar outro cálculo?\n");
        console.log("(S) Sim / (N) Não \n");
        const novamente = (terminal.prompt()).toUpperCase()
        if(novamente === "S"){
            escola.menu();
            opcao = parseInt(terminal.prompt()); 
        } else {
            opcao = 0;
        }
    }
}

function informarNota(dado){
    console.log("Informe a "+ dado);
    const nota = parseFloat(terminal.prompt());
    return nota;
}

module.exports = {
    run
}
