// Tipagem fraca e dinâmica

var b = 1; // Js já entende que é um number

// Tipos primitivos são os tipos de dados: boolean, string, number, array
var a = false;
console.log(typeof(a)); // Resultado esperado boolean

/*
var - escopo global e local, pode ter valor alterado, se não tiver valor inicial será "null"
let - escopo local e bloco, pode ter valor alterado, se não tiver valor inicial será "null"
const - escopo local de bloco, somente leitura, valor inicial obrigatório e não pode ser alterado
*/

let array = ['list1', 'list2', 'list3', 4, 5.4, ['list of list', 'list of list item 2']]
//console.log(array)

array.push('Jack');
//console.log(array)

array.splice(0,3);
console.log(array)

let novoArray = array.slice(0,2)
console.log(novoArray)
/*
forEach() - itera um array
push() - adiciona item no final do array
pop() - remove item no final do array
shift() - remove item do início do array
unshift() - aiciona item no início do array
indexOf() - retorna o índice de um valor
splice() - remove ou substitui um número por um índice
slice() - corta os arrays
*/


// EXEMPLO DE OBJETO

let object = { string: 'string', number: 1, boolean: true, array: ['array'], objetoInterno: {objetoInterno: 'objeto interno'}};

console.log(object.boolean)

//desestruturação

var string = object.string;
console.log(string);

let arrayInterno = object.array;
console.log(arrayInterno);

// segunda forma

var {string, number, objetoInterno} = object;
console.log(string, number, objetoInterno);


