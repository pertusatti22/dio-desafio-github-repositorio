var jogador1 = 0;
var jogador2 = 0;
var placar;

//Condição aninhada
if (jogador1 >=0 && jogador2 >=0){
    //Condição multipla
    if (jogador1 > 0 && jogador2 == 0) {
        console.log('Jogador1 marcou ponto!');
        placar = jogador1 > jogador2;
    } else if (jogador2 > 0 && jogador1 == 0) {
        console.log('Jogador2 marcou ponto!');
        placar = jogador2 > jogador1
    } else {
        console.log('Ninguém marcou ponto!');
    }
}

// condição ternária
jogador1 > 0 && jogador2 === 0 ? console.log('O jogador 1 está ganhando') : console.log('Segue o jogo!');


// Exemplo de switch

switch(placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou!');
        break;
    default:
        console.log('Bola em campo!');
}


// exemplo de for

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = {propriedade1: 'valor', propriedade2: 'valor2', propriedade3: 'valor3'}

for (let i = 0; i<array.length; i++){
    console.log(array[i])
}

// for in para strings
for (let i in array){
    console.log(i);
}

// for / of repetição a partir de um valor, não funciona com objects, tem que passar a propriedade na condição pra funcionar.

for(i of array){
    console.log(i);
}

for(i of object.propriedade1){
    console.log(i);
}

var a = 0;

while (a < 3){
    a++;
    console.log(a);
}

do {
    a = a + 2;
    console.log(a);
} while (a < 15)