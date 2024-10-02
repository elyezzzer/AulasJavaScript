//Exercicio 01
/*let idade = prompt("Digite sua idade: ")
if (idade>=18){
    console.log("Você é de maior");
} else {
    console.log("Você é de menor");
} */

//Exercicio 02
/*let numero = prompt("Digite um número:")
function verificaParOuImpar(numero){
    if (numero % 2 == 0){
        console.log("Par");
    } else {
        console.log("Impar");
    } 
}
verificaParOuImpar(numero); */

//Exercicio 03
/*let numero = prompt("Digite um número: ")
if (numero != 0){
    if (numero >0){
        console.log("Positivo");
    } else {
        console.log("Negativo")
    }
} else {
    console.log("Zero");
} */

//Exercicio 04
let numero = prompt("Digite o número da tabuada que quer ver: ");
function tabuada(numero){
    for (let i=1; i<11; i++){
        let resultado=numero*i;
        console.log(numero + "x" + i + "=" + resultado);
    } 
}
tabuada(numero);
