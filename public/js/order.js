const api_url = "https://watergas-api.herokuapp.com/api/order";

async function showOrders() {
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    show(data);

    function show(data) {
      let table = `<tr>
                <th>Fecha de entrega</th>
                <th>Hora de entrega</th>
                <th>Dirección</th>
                <th>N° bidones</th>
                <th>N° cilíndros</th>
            </tr>`;

      for (let o of data.orders) {
        table += `<tr>
                    <td>${o.date}</td>
                    <td>${o.time}</td>
                    <td>${o.address}</td>
                    <td>${o.water_quantity}</td>
                    <td>${o.gas_quantity}</td>  
                </tr>`;
      }
      document.getElementById("table").innerHTML = table;
    }
  } catch (err) {
    this.err = true;
    alert("Ha ocurrido un error, vuelve a intentarlo más tarde.");
    this.err = false;
  }
}
