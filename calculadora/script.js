function insert(num){
    var visor = document.getElementById("resultado").innerHTML;
    if(visor.length >= 18){
        document.getElementById("resultado").innerHTML = visor
    }
    else{
        document.getElementById("resultado").innerHTML = visor + num
    }
}
function limpar(){
    document.getElementById("resultado").innerHTML = ""
}
function apagar(){
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1);
    //talvez de para usar o indexOf tmb
}
function calcular(){
    var resultado = document.getElementById("resultado").innerHTML;
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado);
        //funcao eval() permite calcular o resultado escrito na string (evaluate?)
    }
    else{
        document.getElementById("resultado").innerHTML = 0;
    }
}