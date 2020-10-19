function calcularIRPF(salario){
    const valorIsento = 2000.00;
    let valorImposto = 0;
    if(salario != ""){
        if(salario > 4000.00){
            valorImposto = (salario - valorIsento) * 0.3;
        }else if(salario > 3000.01 && salario < 4000.00){
            valorImposto = (salario - valorIsento) * 0.22;
        }else if(salario > 2000.01 && salario < 3000.00){
            valorImposto = (salario - valorIsento) * 0.1;
        }
    }
    return valorImposto;
}

function menu(){
    let menuContabil = "####### Sistema Gestão Contábil ############ \n";
    menuContabil += "\n -------------------------------------------\n";
    menuContabil += "Selecione as opções abaixo: \n";
    menuContabil += "(1) Calcular imposto retido na fonte \n";
    menuContabil += "(0) Sair";
    console.log(menuContabil)
}

module.exports = {
    menu,
    calcularIRPF
}