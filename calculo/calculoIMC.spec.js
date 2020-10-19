const moduloCalculo = require('./calculoIMC');

describe('Suite de teste para calculo do IMC', () => {
    it('Qunado executo a função calcularIMC passando os valores peso = 95 e altura= 1.75, o resultado deve ser igual a ', () => {
        expect(moduloCalculo.calcularIMC(95, 1.75)).toBe(31.02);
    });
})