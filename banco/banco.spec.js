const moduloBanco = require('./banco');
describe('Suite de teste para modulo Banco', () => {
    it('Quando executo a função exibirMensagem passando o valor 1, o retorno deve ser a mensagem "Sacar"', () => {
        expect(moduloBanco.exibirMensagem(1)).toBe("Sacar");
    });

    it('Quando executo a função exibirMensagem passando o valor 2, o retorno deve ser a mensagem "Depositar"', () => {
        expect(moduloBanco.exibirMensagem(2)).toBe("Depositar");
    });

    it('Quando executo a função exibirMensagem passando o valor 3, o retorno deve ser a mensagem "Verificar Saldo"', () => {
        expect(moduloBanco.exibirMensagem(3)).toBe("Verificar Saldo");
    });

    it('Quando executo a função exibirMensagem passando o valor 4, o retorno deve ser a mensagem "Obrigado por utilizar um dos nossos terminais de auto atendimento"', () => {
        expect(moduloBanco.exibirMensagem(4)).toBe("Obrigado por utilizar um dos nossos terminais de auto atendimento");
    });

    it('Quando executo a função exibirMensagem passando o valor 0, o retorno deve ser a mensagem "opção inválida"', () => {
        expect(moduloBanco.exibirMensagem(0)).toBe("opção inválida");
    });

    it('Quando executo a função exibirMensagem passando o valor 5, o retorno deve ser a mensagem "opção inválida"', () => {
        expect(moduloBanco.exibirMensagem(5)).toBe("opção inválida");
    });

})