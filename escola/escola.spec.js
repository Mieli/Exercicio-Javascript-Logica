const moduloEscola = require('./escola');

describe('Suite de teste para o módulo da Escola', () => {
    it('Quando executo a função calcularMedia passando os valores nota1 = 8, nota2 = 9, nota3 = 9, o resulto deve ser igual a "Média: 8.67 Conceito: Muito Bom"', () => {
        expect(moduloEscola.calcularMedia(8, 9, 9)).toBe("Média: 8.67 Conceito: Muito Bom");
    });

    it('Quando executo a função calcularMedia passando os valores nota1 = 6, nota2 = 5, nota3 = 8, o resulto deve ser igual a "Média: 6.33 Conceito: Bom"', () => {
        expect(moduloEscola.calcularMedia(6, 5, 8)).toBe("Média: 6.33 Conceito: Bom");
    });

    it('Quando executo a função calcularMedia passando os valores nota1 = 3, nota2 = 4, nota3 = 5, o resulto deve ser igual a "Média: 4.00 Conceito: Insuficiente"', () => {
        expect(moduloEscola.calcularMedia(3, 4, 5)).toBe("Média: 4.00 Conceito: Insuficiente");
    });

    it('Quando executo a função calcularMedia passando os valores nota1 = 9, nota2 = 10, nota3 = 9, o resulto deve ser igual a "Média: 9.33 Conceito: Excelente"', () => {
        expect(moduloEscola.calcularMedia(9, 10, 9)).toBe("Média: 9.33 Conceito: Excelente");
    });

    it('Quando executo a função calcularMedia passando os valores nota1 = 4, nota2 = 5, nota3 =7, o resulto deve ser igual a "Média: 5.33 Conceito: Regular"', () => {
        expect(moduloEscola.calcularMedia(4, 5, 7)).toBe("Média: 5.33 Conceito: Regular");
    });
});