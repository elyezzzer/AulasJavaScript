/*let idade = prompt("Digite sua idade: ")
if (idade>=18){
    console.log("Você é de maior");
} else {
    console.log("Você é de menor");
} */

/*let numero = prompt("Digite um número:")
if (numero % 2 == 0){
    console.log("Par");
} else {
    console.log("Impar");
} */

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

let tabuada = prompt("Digite o número da tabuada que quer ver: ");
for (let i=1; i<11; i++){
    let resultado=tabuada*i;
    console.log(tabuada + "x" + i + "=" + resultado);
}
