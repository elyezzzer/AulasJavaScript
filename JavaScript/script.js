function calculadora(n1,n2,operacao){
    if(operacao == "soma"){
        return n1+n2;
    } 
    if(operacao == "subtracao"){
        return n1-n2;
    }
    if(operacao == "multiplicacao"){
        return n1*n2;
    }
    if(operacao == "divisao"){
        return n1/n2;
    }
    return "Operação inválida."
}
console.log(calculadora(10,20,"subtracao"));
console.log(calculadora(10,20,"soma"));
console.log(calculadora(10,20,"multiplicacao"));
console.log(calculadora(10,20,"divisao"));
console.log(calculadora(10,20,"erro"));