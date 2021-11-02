function updateNumberAndTotal(id, productId, totalValue) {
    const productInput = document.getElementById(productId);
    let productNumber = productInput.value;
    if(id == 'case-plus' || id == 'phone-plus'){
        productNumber = parseInt(productNumber)+1;
    }
    else if ((productNumber > 0 && id == 'case-minus') || (productNumber > 0 && id == 'phone-minus')){
        productNumber = parseInt(productNumber)-1;
    }

    productInput.value = productNumber;
    //update total value
    let productTotal = document.getElementById(totalValue);
    if(productId == 'case-number'){
        productTotal.innerText = productNumber*59;
    } 
    else {
        productTotal.innerText = productNumber*1219;
    }
    //calculate total
    calculateTotal();
};

function getInputValue(id) {
    const productNumber = document.getElementById(id).value;
    return parseInt(productNumber);
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone-number') * 1219;
    const caseTotal = getInputValue('case-number') * 59;
    const subTotal = caseTotal+phoneTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    //update on html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = total;

}

document.getElementById('case-plus').addEventListener('click', function() {
    updateNumberAndTotal('case-plus','case-number','case-total');
});

document.getElementById('case-minus').addEventListener('click', function() {
    updateNumberAndTotal('case-minus','case-number','case-total');
});

document.getElementById('phone-plus').addEventListener('click', function() {
    updateNumberAndTotal('phone-plus','phone-number','phone-total');
});

document.getElementById('phone-minus').addEventListener('click', function() {
    updateNumberAndTotal('phone-minus','phone-number','phone-total');
});