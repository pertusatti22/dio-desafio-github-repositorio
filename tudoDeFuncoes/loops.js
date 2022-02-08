function numeroPositivo(num){
    if (num < 0){
        resultado = false;
    }else{
        resultado = true;
    }
    return resultado;

}

console.log(numeroPositivo(-1));

console.log(numeroPositivo(1));

// reescrevendo a função utilizando variável como condicional e economizando memória

function positivo(num){
    const negativo = num < 0;

    if(negativo){
        return false;
    }
    return true;
}

// Switch/case

function getAnimal(id){
    switch(id){
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe";
    }
}

for(let i = 1; i<5; i++){
    console.log(getAnimal(i))
}

// For in para acessar propriedades enumeráveis de um objeto.

function exemplo(obj){
    for(p in obj){
        console.log(p);
    }
}

// acessando as propriedades

function exemplo2(obj){
    for(p in obj){
        console.log(obj[p]);
    }
}


const perfil = {
    nome: 'jack',
    idade: '30',
    cidade: 'Brasília'
}

exemplo(perfil);

exemplo2(perfil);