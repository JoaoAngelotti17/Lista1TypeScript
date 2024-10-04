"use strict";
let valor;
valor = "Texto";
valor = 123;
function soma(n1, n2) {
    return n1 + n2;
}
console.log("Resultado: " + soma(5, 2));
const pessoa = {
    nome: "João Angelotti",
    idade: 19
};
console.log(pessoa);
class Animal {
    falar() {
        console.log("som do animal.");
    }
}
class Cachorro extends Animal {
    falar() {
        console.log("Au Au");
    }
}
const animal = new Animal();
animal.falar();
const cachorro = new Cachorro();
cachorro.falar();
function maiorNumero(numeros) {
    let maior = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    return maior;
}
const numeros = [100, 55, 911, 37, 83];
const maiorValor = maiorNumero(numeros);
console.log("O Maior valor indicado é:", maiorValor);
var cores;
(function (cores) {
    cores["R"] = "Vermelho";
    cores["G"] = "Verde";
    cores["B"] = "Blue";
})(cores || (cores = {}));
let carro = {
    nome: 'Golf',
    cor: cores.R,
};
console.log(carro);
function duploParametro(param) {
    if (typeof param === 'string') {
        return param.length;
    }
    else {
        return param * 2;
    }
}
console.log(duploParametro("Castlevania"));
console.log(duploParametro(996.5));
//# sourceMappingURL=index.js.map