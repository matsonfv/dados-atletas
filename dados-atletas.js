class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        };
    };
    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    };
    calculaMediaValida() {
        let notasValidas = this.notas.sort(function(a, b){return b - a}).slice(1,4) 
        
        return notasValidas.reduce((total, valorAtual) => 
            total + valorAtual
            , 0) / notasValidas.length;
    };
    obtemNomeAtleta() {
        return `Nome: ${this.nome}\n`;
    };
    obtemIdadeAtleta() {
        return `Idade: ${this.idade}\n`;
    };
    obtemPesoAtleta() {
        return `Peso: ${this.peso}\n`;
    };
    obtemNotasAtleta() {
        return `Notas: ${this.notas}\n`;
    };
    obtemCategoria() {
        return `Categoria: ${this.calculaCategoria()}\n`;
    };
    obtemIMC() {
        return `IMC: ${this.calculaIMC()}\n`;
    };
    obtemMediaValida() {
        return `Média válida: ${this.calculaMediaValida()}`;
    };
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemNomeAtleta(), 
            atleta.obtemIdadeAtleta(),
            atleta.obtemPesoAtleta(),
            "Altura: " + atleta.altura + "\n",
            atleta.obtemNotasAtleta(),
            atleta.obtemCategoria(),
            atleta.obtemIMC(),
            atleta.obtemMediaValida());