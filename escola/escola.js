function calcularMedia(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    return exibirConceito(media.toFixed(2));
}

function menu(){
    let menuEscolar = "################# Sistema Gestão Escolar ######################### \n";
    menuEscolar += "Selecione as opções abaixo: \n";
    menuEscolar += "(1) Calcular a média do aluno \n";
    menuEscolar += "(0) Sair";
    console.log(menuEscolar);
}

function exibirConceito(media) {
    let conceito = "Insuficiente"
    if (media >= 9) {
        conceito = "Excelente";
    } else if (media >= 8) {
        conceito = "Muito Bom";
    } else if (media >= 6) {
        conceito = "Bom";
    } else if (media >= 5) {
        conceito = "Regular";
    }
    return "Média: " + media + " Conceito: " + conceito;
}

module.exports = {
    menu,
    calcularMedia
}
