const products = [];
const nameInput = document.querySelector('.name');
const percentInput = document.querySelector('.percent');
const termInput = document.querySelector('.term');
const selectProduct = document.querySelector('#selection');
const sumInput = document.querySelector('.sum');
const periodInput = document.querySelector('.period');
const createButton = document.querySelector('.create');
const clearButton = document.querySelector('.clear');
const calculateButton = document.querySelector('.calculate');
class Product {
    constructor(name, percent, term) {
        this.name = name;
        this.percent = percent;
        this.term = term;
    }
}
function checkName(name) {
    for (let i = 0; i < products.length; i++) {
        if (name === products[i].name) {
            alert('Product alredy exists.');
            return false;
        }
    }
    return true;
}
function checkValues() {
    const v1 = nameInput.value;
    const v2 = percentInput.value;
    const v3 = termInput.value;
    const v4 = selectProduct.value;
    const v5 = sumInput.value;
    const v6 = periodInput.value;
    if (v1 || v2 || v3 || v5 || v6) {
        clearButton.disabled = false;
    }
    else {

        clearButton.disabled = true;
    }
    if (v1 && v2 && v3) {
        createButton.disabled = false;

    }
    else {
        createButton.disabled = true;

    }
    if (v4 && v5 && v6) {
        calculateButton.disabled = false;
    }
    else {
        calculateButton.disabled = true;
    }

}


nameInput.addEventListener('input', checkValues);
percentInput.addEventListener('input', checkValues);
termInput.addEventListener('input', checkValues);
selectProduct.addEventListener('input', checkValues);
sumInput.addEventListener('input', checkValues);
periodInput.addEventListener('input', checkValues);
clearButton.addEventListener('click', () => {
    const select = document.getElementById('selection');
    const calcSpace = document.getElementById('calcSpace');
    calcSpace.innerHTML = '';
    select.innerHTML = '';
    nameInput.value = '';
    percentInput.value = '';
    termInput.value = '';
    sumInput.value = '';
    periodInput.value = '';
    checkValues();
});

function getInfo() {

    if (checkName(nameInput.value) === false) { return; }
    const product = new Product(
        nameInput.value,
        percentInput.value,
        termInput.value
    );

    products.push(product);
    const opt = document.createElement('option');
    opt.innerHTML = product.name;
    selection.append(opt);

}

document
    .querySelector('.create')
    .addEventListener('click', getInfo);

function getClientValues() {
    return {
        name: selectProduct.value,
        sum: sumInput.value,
        period: periodInput.value
    };
};
function client() {
    const clientValue = getClientValues();
    for (let i = 0; i < products.length; i++) {
        let bankValue = products[i];
        if (bankValue.name === clientValue.name) {
            const result = clientValue.sum * (1 + bankValue.percent / 100 / clientValue.period) ** (bankValue.term);
            calculate(`Product: ${clientValue.name}<br></br>Amount: ${clientValue.sum}<br></br>Calculation: ${result}`)
        }
    };
};

function calculate(client) {
    let calculation = document.createElement('div');
    calculation.className = 'calculation';
    calculation.innerHTML = String(client);
    calcSpace.append(calculation);
}
document
    .querySelector('.calculate')
    .addEventListener('click', client);













