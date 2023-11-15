
let nivel = ""
let resultado = ranking(90, 35)


function ranking(quantVitoria, quantDerrota){

    let saldo = quantVitoria - quantDerrota
    return saldo   
}


if(resultado <= 10){
    nivel = "ferro"
}else if (resultado <= 20){
    nivel = "bronze"
}else if(resultado <= 50){
    nivel = "prata"
}else if(resultado <= 80){
    nivel = "ouro"
}else if(resultado <= 90){
    nivel = "diamante"
}else if(resultado <= 100){
    nivel = "lendário"
}else if(resultado >= 101){
    nivel = "imortal"
}
console.log("o herói tem o saldo de " + resultado + " vitórias, portanto está no nível " + nivel)