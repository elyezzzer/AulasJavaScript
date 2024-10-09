function calculadora(n1,n2,operacao){
    if(operacao == "soma"){
        return soma(n1,n2)
    }
    if(operacao == "subtracao"){
        return subtracao(n1,n2)
    }
    if(operacao == "multiplicacao"){
        return multiplicacao(n1,n2)
    }
    if(operacao == "divisao"){
        return divisao(n1,n2)
    }
    return "Operação Inválida";
}
function soma(n1,n2){
    return n1+n2;
}
function subtracao(n1,n2){
    return n1-n2;
}
function multiplicacao(n1,n2){
    return n1*n2;
}
function divisao(n1,n2){
    return n1/n2;
}

console.log(calculadora(10,10,"erro"));
console.log(calculadora(10,10,"soma"));
console.log(calculadora(10,10,"subtracao"));
console.log(calculadora(10,10,"multiplicacao"));
console.log(calculadora(10,10,"divisao"));