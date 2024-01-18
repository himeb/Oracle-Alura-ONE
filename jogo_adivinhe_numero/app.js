alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

//Enquanto o número secreto não for igual ao chute
while (chute != numeroSecreto){
   chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
   // Se o chute for igual ao número secreto
    if (numeroSecreto == chute){
        break;
    } else{
        if (numeroSecreto > chute){
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}

                    // se tentativas maior que 1 recebe tentativas se não tentativa
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);




