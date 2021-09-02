function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}

function addNumber(number){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = numero + number;
}

function apagar(){
    document.getElementById('resultado').innerHTML = "";
}