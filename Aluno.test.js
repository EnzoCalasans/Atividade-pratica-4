const Aluno = require('./Aluno.js');

describe('Testes da classe Aluno', () => {
    let aluno;
    beforeEach(() => {
        aluno = new Aluno('João', [8, 6]);
    });

    test('calcularMedia deve retornar a média correta', () => {
        expect(aluno.calcularMedia()).toBe(7);
    });

    test('calcularMenção deve retornar MS para média >= 7 e < 9', () => {
        expect(aluno.obterMencao()).toBe('MS');
    });

    test('statusAprovacao deve retornar "aprovad@" para menção MS', () => {
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });
    test('calcularMenção deve retornar SS para média >= 9', () => {
        aluno = new Aluno('Maria', [10, 9]);
        expect(aluno.obterMencao()).toBe('SS');
    });

    test('statusAprovacao deve retornar "aprovad@" para menção SS', () => {
        aluno = new Aluno('Maria', [10, 9]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    test('calcularMenção deve retornar MM para média >= 5 e < 7', () => {
        aluno = new Aluno('Carlos', [5, 6]);
        expect(aluno.obterMencao()).toBe('MM');
    });

    test('statusAprovacao deve retornar "aprovad@" para menção MM', () => {
        aluno = new Aluno('Carlos', [5, 6]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    test('calcularMenção deve retornar MI para média < 5', () => {
        aluno = new Aluno('José', [3, 4]);
        expect(aluno.obterMencao()).toBe('MI');
    });

    test('statusAprovacao deve retornar "reprovad@" para menção MI', () => {
        aluno = new Aluno('José', [3, 4]);
        expect(aluno.statusAprovacao()).toBe('reprovad@');
    });
})
