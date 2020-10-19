const terminal = require('readline-sync');
const construtora =  require('./contrutora');

function run(){
    construtora.menu();
    let opcao = parseInt(terminal.prompt());
    while(opcao != 0){
        switch(opcao){
            case 1:
                console.log("\n ## Calcular valor total do assentamento do piso ## \n -------------------------------------------\n");

                const alturaCalculoPiso = informarDado("altura da parede");
                const larguraCalculoPiso = informarDado("largura da parede");
                const precoPorMetroQuadrado = 9.90;
                const valorTotalCalculoPiso = construtora.calcularValorAssentamentoDoPiso(larguraCalculoPiso, alturaCalculoPiso, precoPorMetroQuadrado);
                console.log(valorTotalCalculoPiso);
                break;
            case 2:
                console.log("\n ## Calcular a metragem cúbida do reboco ## \n -------------------------------------------\n");
                const alturaCalculoReboco = informarDado("altura da parede");
                const larguraCalculoReboco = informarDado("largura da parede");
                const profundidadeReboco = informarDado("profundidade do reboco");
                const valorTotalCalculoReboco = construtora.calcularMetragemCubicaDoReboco(larguraCalculoReboco, alturaCalculoReboco, profundidadeReboco);
                console.log(valorTotalCalculoReboco);    
                break;
        }
        console.log("Deseja realizar outro cálculo?\n");
        console.log("(S) Sim / (N) Não \n");
        const novamente = (terminal.prompt()).toUpperCase()
        if(novamente === "S"){
            construtora.menu();
            opcao = parseInt(terminal.prompt()); 
        } else {
            opcao = 0;
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

