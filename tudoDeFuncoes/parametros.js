// Valores padrão de uma função
function exponencial(array, num = 1){
    const result = [];

    for(let i = 0; i < array.length; i++){
        result.push(array[i] ** num);
    }

    return result;
}


console.log(exponencial([1,2,3,4]))

console.log(exponencial([1,2,3,4], 4))

// Object "arguments"
// Um array com todos os parâmetros passados quando a função foi invocada.

function findMax(){
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }    
    }
    return max;
}

console.log(findMax(1,2,3,6,90,1))


