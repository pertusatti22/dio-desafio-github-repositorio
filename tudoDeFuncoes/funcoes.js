// Estrutura
function nomeDaFuncao(parametros){
    //instrucoes
}

function comReturn(parametros){
    //instrucoes

    return; // valor de retorno e da um "break" na funcao
}

// Funcao anonima

const soma = function (a, b) {
    return a + b;
}

soma(1, 2)
soma(5, 4)

// Funcao autoinvocável - Uma função que "autoexecuta"
// (
//     function() {
//         let name = "Jackson Pertusatti";
//         return name;
//     }
// )();
// Essas funcoes pode ter parametros e ser armazenadas em variaveis
// (
//     function(a,b){
//         return a + b;
//     }
// )(1, 2);

const soma3 = (
    function (a,b) {
        return a+b;
    }
)(1, 2);

console.log(soma3)

// Funcoes "Callbacks" - funcoes passadas como argumentos para outras funcoes

const calc = function(oper1, n1, n2) {
    return oper1(n1,n2);
}

const sub = function(n1,n2){
    return n1 - n2;
}

const resulSub = calc(sub, 1, 2);

console.log(resulSub);

// This é a palavra reservada para referenciar o contexto
const pessoa = {
    firstName: "Jackson",
    lastName: "Pertusatti",
    id: 1,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    getId: function (){
        return this.id;
    }
}

console.log(pessoa.fullName());

console.log(pessoa.getId());


const animal = {
    firstName: 'Perseu'
}

function getSomething(){
    console.log(this.firstName);
}

getSomething.call(animal);

getSomething.call(pessoa);

// Apply

getSomething.apply(pessoa);
getSomething.apply(animal);

// passano argumento de função com this
const objSoma = {
    n1 : 2,
    n2 : 4,
};

function somaObj(a, b){
    console.log(this.n1 + this.n2 + a + b);
}

somaObj.call(objSoma, 1, 5);

somaObj.apply(objSoma, [1, 5]);

// Bind clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro:

const retornaNomes = function() {
    return this.nome;
};

let jack = retornaNomes.bind({nome:'Jack Sparrow'});

console.log(jack());