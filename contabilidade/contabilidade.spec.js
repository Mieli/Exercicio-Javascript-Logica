const moduloContabilidade = require('./contabilidade');

describe('Suite de teste para o modulo de contabilidade', () => {
    it('Quando executo a função calcularIRPF passando o valor do salario = 1999.70, o resultado deve ser igual à Valor do imposto retido: 0', () => {
        expect(moduloContabilidade.calcularIRPF(1999.70)).toBe(0);
    });

    it('Quando executo a função calcularIRPF passando o valor do salario = 2500.00, o resultado deve ser igual à Valor do imposto retido: 50.00', () => {
        expect(moduloContabilidade.calcularIRPF(2500.00)).toBe(50.00);
    });

    it('Quando executo a função calcularIRPF passando o valor do salario = 3250.00, o resultado deve ser igual à Valor do imposto retido: 330.00', () => {
        expect(moduloContabilidade.calcularIRPF(3500.00)).toBe(330.00);
    });

    it('Quando executo a função calcularIRPF passando o valor do salario = 5250.00, o resultado deve ser igual à Valor do imposto retido: 1050.00', () => {
        expect(moduloContabilidade.calcularIRPF(5500.00)).toBe(1050.00);
    });
})