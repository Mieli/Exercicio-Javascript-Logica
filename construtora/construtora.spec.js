const moduloConstrutora = require('./contrutora');

describe('Suite de teste para o módulo da construtora', () => {
    it('Quando executo a função calcularValorAssentamentoDoPiso passando os valores largura = 2, altura = 5, e o valor do metro quadrado = 9.90, o resulto deve ser igual a "A àrea é de: 10m2 e o valor da Obra é de R$ 99.00"', () => {
        expect(moduloConstrutora.calcularValorAssentamentoDoPiso(2, 5, 9.90)).toBe("\nA àrea é de: 10m2 e o valor da Obra é de R$ 99.00\n")
    });

    it('Quando executo a função calcularMetragemCubicaDoReboco passando os valores altura = 3, largura = 6, e a profundidade do reboco = 0.02, o resulto deve ser "A metragem cúbida do reboco é de: 0.36m2 e o valor da Obra é de R$ 73.8"', () => {
        expect(moduloConstrutora.calcularMetragemCubicaDoReboco(3, 6, .02)).toBe("\nA metragem cúbida do reboco é de: 0.36m2 e o valor da Obra é de R$ 73.80\n")
    });
});