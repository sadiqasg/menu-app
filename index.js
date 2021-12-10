let prices = [];

const getPrice = button => {
    if (button.textContent == "Select") {
        button.style.backgroundColor = "#6b705c";
        prices.push(button.id);
        button.textContent = "Item Selected";
    }
}

const calcBill = billArray => {
    return billArray.reduce((a, b) => parseInt(a) + parseInt(b), 0);
}


const getBill = () => {
    document.getElementById("bill-section").innerHTML = `<span>Calculating...</span>`;
    let bill = calcBill(prices);
    setTimeout(() => {
        document.getElementById("bill-section").innerHTML = `<span>Your bill is <span id='bill'>&#8358; ${bill.toLocaleString()}</span></span>`;
    }, 2000);
}

const cancel = () => {
    location.reload();
}