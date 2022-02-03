function calculadora() {
    const operacao = prompt('Escolha uma operação:\n 1 - Soma\n 2 - subtração');

    let n1  = Number(prompt('Digite o primeiro numero'));
    let n2 = Number(prompt('Digite o segundo numero'));
    let resultado;

    function nova(){
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

        if (opcao == 1){
            calculadora();
        } else if (opcao == 2){
            alert('Fim do Programa!');
        } else {
            alert('Digite uma opção vália!')
            nova();
        }
    }

    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        nova();
    }
    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        nova();
    }

    if (operacao == 1){
        soma();
    } else if (operacao == 2) {
       subtracao();
    } else {
        console.log('Fim do programa!s')
    }
}
calculadora();