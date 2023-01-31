const itemname = document.getElementById('itemname');
const itemprice = document.getElementById('itemprice');
const btn = document.getElementById('btn');
const table = document.getElementById('table');
const grandtotal = document.getElementById('grandtotal');
let total = 0;
btn.addEventListener("click", add);

function add() {
    let captureitem = itemname.value;
    let captureprice = itemprice.value;
    total += parseInt(captureprice);
    console.log(captureprice);
    console.log(captureitem);
    const newtr = document.createElement('tr');
    newtr.id = "newrow";

    const newtd1 = document.createElement('td');
    newtd1.id = "td1";
    newtd1.innerText = captureitem;
    newtr.appendChild(newtd1)
    const newtd2 = document.createElement('td');
    newtd2.id = "td2";
    newtd2.innerText = captureprice;
    newtr.appendChild(newtd2)

    table.appendChild(newtr);
    grandtotal.innerText = total
    itemname.value = "";
    itemprice.value = "";
}
