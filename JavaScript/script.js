// Função simples
function exibirBoasVindas(){
    return console.log("Olá, seja bem vindo!");
}
exibirBoasVindas();

//Função com parâmetros
function soma(a, b, c){
    const total = a + b + c;
    return console.log("Total soma: ", total);
}
soma(10,20,30);

//Função anônima
const multiplicar = function(x, y){
    return console.log("Multiplicação: ", x * y);
}
multiplicar(3,5);

//Função arrow function
const dividir = (a, b) => a / b;
console.log("Divisão: ", dividir(10,2));

//Função de callback
function inicializarProjeto(){
    exibirBoasVindas();
    soma(40, 50, 10);
    multiplicar(10,6);
    dividir(20,2);
}
inicializarProjeto();