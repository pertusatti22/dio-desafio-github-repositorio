/*Assíncrono - que não ocorre ou não se efetiva ao mesmo tempo.
síncrono - efetiva-se no mesmo tempo. Por padrão o javascript 
acontece de maneira síncrona no assíncrono a gente pode rodar 
processos simultâneos */

//Promises = Objeto de processamento assíncrono
// Inicialmente, seu valor é desconhecido. Ela pode então, ser resolvida ou rejeitada.
// Estados da promise: 1 - pending 2 - fulfilled 3 - rejected
// pendente, aceita ou rejeita

// Exemplo de promisse
async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida!');
        }, 3000);
    });

const resolved = await myPromise
    .then((result) => result + 'passando pelo then')
    .then((result) => result + 'e agora acabou!')
    .catch((err) => console.log(err.message));

return resolved;
}