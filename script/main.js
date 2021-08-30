function calcular(){
    var vl1 = parseInt(document.getElementById("vl1").value);
    var vl2 = parseInt(document.getElementById("vl2").value);
    var operador = document.getElementById("operador").value;
    var result = document.getElementById("result");

    if (operador == "+"){
        result.value = vl1 + vl2;
    }
    else if(operador == "-"){
        result.value = vl1 - vl2;
    }
    else if(operador == "*"){
        result.value = vl1 * vl2;
    }
    else{
        result.value = vl1 / vl2;
    }
}