//exercício 1
let valor: string | number;
valor = "Texto";
valor = 123;

//exercício 2
function soma(n1: number, n2: number): number {
    return n1 + n2;
  }
  console.log("Resultado: " + soma(5, 2));

//exercício 3
interface Pessoa {
    nome: string;
    idade: number;
}

const pessoa: Pessoa = {
    nome: "João Angelotti",
    idade: 19
};

console.log(pessoa);

//exercicio 4
class Animal {
    falar(): void {
        console.log("som do animal.");
    }
}

class Cachorro extends Animal {
    falar(): void {
        console.log("Au Au");
    }
}

// Exemplo 
const animal = new Animal();
animal.falar();  

const cachorro = new Cachorro();
cachorro.falar();  

//exercício 5
function maiorNumero(numeros: number[]): number {
    let maior = numeros[0];  

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];  
        }
    }

    return maior;
}

// Exemplo 
const numeros = [100, 55, 911, 37, 83];
const maiorValor = maiorNumero(numeros);
console.log("O Maior valor indicado é:", maiorValor);

//exercício 6
enum cores{
    R = 'Vermelho',
    G = 'Verde',
    B = 'Blue'
}
let carro = {
    nome: 'Golf',
    cor: cores.R,
};
console.log(carro);

//exercício 7
function duploParametro(param: string | number): number {
    if (typeof param === 'string') {
        return param.length; 
    } else {
        return param * 2;  
    }
}

// Exemplos 
console.log(duploParametro("Castlevania"));  
console.log(duploParametro(996.5));       
