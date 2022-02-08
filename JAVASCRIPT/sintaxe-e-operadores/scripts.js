function sintOper (a,b){
    const primeiraFrase = criaPrimeiraFrase(a,b);
    const segundaFrase = criaSegundaFrase(a,b);
    
    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(a,b) {
    let iguais = '';

    if(a !== b){
        iguais = 'não';
    }

    return `Os números ${a} e ${b} ${iguais} são iguais.`
}

function criaSegundaFrase(a,b){
    const soma = a + b;
    const comparaMaior = soma > 10;
    const comparaMenor = soma < 20;
    let maior10 = 'menor';
    let menor20 = 'maior';

    if(comparaMaior){
        maior10 = 'maior';
    }
    if(comparaMenor){
        menor20 = 'menor';
    }


    return `Sua soma é ${soma}, que é ${maior10} que 10 e ${menor20} que 20`
}

console.log(sintOper (10,2));


function validaNumero(num){

    if (!num) return "Envie um número válido!";

  

    return num;

}



console.log(validaNumero());