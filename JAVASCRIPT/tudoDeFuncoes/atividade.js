// 1. Crie uma função que recebe o array alunos e um número que irá representar a média final;
// 2. percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
// 3. Utilize a técnica de object destructuring para manipular as propriedades desejadas de cada aluno

function notaAluno(alunos, mediaFinal){
    let auxiliar = [];
    for(let i = 0; i<alunos.length; i++){
        
        const {nota, nome} = alunos[i]; // usando object destructuring
        
        if(nota >= mediaFinal){
            auxiliar.push(nome);
        }
    }
    console.log(auxiliar);
}


const alunos = [{nome: 'Jackson', nota:10, idade: 30,},{nome: 'Stryker', nota:8, idade: 28,},{nome: 'Arcalion', nota:5, idade: 18,}];

notaAluno(alunos, 8);

// Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this.



function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calculaIdade.call(alunos[1], 5));
console.log(calculaIdade.apply(alunos[0], [14]));