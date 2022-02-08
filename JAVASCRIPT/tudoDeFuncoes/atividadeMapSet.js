function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if (value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Jack', 'Admin');
usuarios.set('Thorin', 'User');
usuarios.set('Noah', 'User');
usuarios.set('Tuca', 'Admin');

console.log(getAdmins(usuarios))


const numeros = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr)

    return [...mySet];
}

console.log(valoresUnicos(numeros));~

