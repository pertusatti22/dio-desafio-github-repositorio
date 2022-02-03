//funções
function funcao (){
    console.log('Função em funcionamento!')
}

function soma(a,b){
    console.log(a+b);
}
//expressões de funções
var subtracao = function(a,b){
    console.log(a-b);
}

var potencia = function potencia(a,b){
    console.log(a**b);
}

//arrows functions são sempre anonimas
var flecha = () => {
    console.log('Atirei!');
}

// chamadas
funcao();

soma(3,2);

subtracao(3,2);

potencia(3,2);

flecha();