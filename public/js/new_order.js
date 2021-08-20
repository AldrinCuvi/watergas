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

  if (valueCount1 < 0) {
    e.preventDefault();
  } else {
    //Colocar el valor restado en input1
    document.getElementById("quantity1").value = valueCount1;
  }
});

document.querySelector(".minus-btn2").addEventListener("click", (e) => {
  //Obtener el valor de input2
  valueCount2 = document.getElementById("quantity2").value;

  //Restar valor2
  valueCount2--;

  if (valueCount2 < 0) {
    e.preventDefault();
  } else {
    //Colocar el valor restado en input2
    document.getElementById("quantity2").value = valueCount2;
  }
});

const newOrder = () => {
  try {
    const water_quantity = document.getElementById("quantity1").value.trim();
    const gas_quantity = document.getElementById("quantity2").value.trim();
    const date1 = document.getElementById("new_order_date").value.trim();
    const date2 = new Date(date1).toLocaleString("es-US");
    const date = date2.split(" ")[0];
    const time = document.getElementById("new_order_time").value.trim();
    const address = document.getElementById("address").value.trim();
    const payment_method = document
      .getElementById("payment_method")
      .value.trim();

    const api = "https://watergas-api.herokuapp.com/api/order/newOrder";

    const order = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        water_quantity,
        gas_quantity,
        date,
        time,
        address,
        payment_method,
      }),
    };

    fetch(api, order).then((response) => response.json());

    alert("Tu pedido fue enviado con éxito.");
  } catch (err) {
    this.err = true;
    alert("Ha ocurrido un error, vuelve a intentarlo más tarde.");
    this.err = false;
  }
};
