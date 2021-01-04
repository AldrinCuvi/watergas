function saveFunction(){
    alert("¡Su pedido fue generado con éxito!")
}

//Incremetar y restar valor de input
let valueCount1, valueCount2;

//Botón + (más)
document.querySelector(".plus-btn1").addEventListener("click", () => {
    //Obtener el valor de input1
    valueCount1 = document.getElementById("quantity1").value;
    //Incremetar valor1
    valueCount1++;
    
    //Colocar el valor incrementado en input1
    document.getElementById("quantity1").value = valueCount1;
});

document.querySelector(".plus-btn2").addEventListener("click", () => {
    //Obtener el valor de input2
    valueCount2 = document.getElementById("quantity2").value;

    //Incremetar valor2
    valueCount2++;
    
    //Colocar el valor incrementado en input2
    document.getElementById("quantity2").value = valueCount2;
});

//Botón - (menos)
document.querySelector(".minus-btn1").addEventListener("click", (e) => {
    //Obtener el valor de input1
    valueCount1 = document.getElementById("quantity1").value;
    //Restar valor1
    valueCount1--;
    
    if (valueCount1 < 0){
        e.preventDefault();
    }else{
        //Colocar el valor restado en input1
        document.getElementById("quantity1").value = valueCount1;
    }
    
});

document.querySelector(".minus-btn2").addEventListener("click", (e) => {
    //Obtener el valor de input2
    valueCount2 = document.getElementById("quantity2").value;
    
    //Restar valor2
    valueCount2--;
    
    if (valueCount2 < 0){
        e.preventDefault();
    }else{
        //Colocar el valor restado en input2
        document.getElementById("quantity2").value = valueCount2;
    }
    
});