// Arrays
// Spread - técnica para lidar separadamente com elementos de um array. O que era parte de um array se torna um elemento independente.


function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3];


console.log(sum(...numbers));

// Rest: combina os argumentos de um array. O que era um elemento independente se torna parte de um array

function confereTamanho(...args) {
    console.log(args.length)
}

confereTamanho()
confereTamanho(1, 2)
confereTamanho(3, 4, 5)


// Objects Destructuring. Entre chaves {} podemos filtrar apenas os daos que nos interessam em um objeto.

const user = {
    id: 42,
    displayName: 'jdoe',
    fullName:{
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userID({id}){
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}){
    return `${first} ${last}`;
}

console.log(userID(user))

console.log(getFullName(user))