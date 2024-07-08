const prompt = require("prompt-sync")();
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function verificaNum(){
    while(true){
        num = prompt("Digite um número");
        if(isNaN(num)){
            console.log("ERRO. Digite um valor numérico válido.");
        } else{
            return Number(num);
        }
    }
}

function sequencial(numero){
    let comparacoes;
    for(let i =0; i<array.length; i++){
        comparacoes++;
        if(array[i] == numero){
            console.log(`O número ${numero} está na posição ${i}, comparações: ${comparacoes}`)
        }
    }
}

function binaria(numero){
    let primeiro = 0;
    let ultimo = array.length-1;
    let comparacoes = 0;

    while(primeiro <= ultimo){
        let meio = Math.floor((primeiro+ultimo)/2);
        comparacoes++;
        if(array[meio] == numero){
            console.log(`O número ${numero} está na posição ${meio}, comparações: ${comparacoes}`);
        } else{
            if(array[meio] < numero){
                primeiro = meio + 1;
            } else{
                ultimo = meio - 1;
            }
        }
    }
}

module.exports = {
    verificaNum,
    sequencial,
    binaria
};