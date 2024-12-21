const workDropdown = document.getElementById('work');
const ratePerSqFtInput = document.getElementById('ratePerSqFt');
const targetAreaInput = document.getElementById('targetArea');
const expectedBillingInput = document.getElementById('expectedBilling');
const expectedBillingAmountDisplay = document.getElementById('expectedBillingAmount');

const dcsMasonInput = document.getElementById('dcsMason');
const contractMasonInput = document.getElementById('contractMason');
const dcsHelperInput = document.getElementById('dcsHelper');
const contractHelperInput = document.getElementById('contractHelper');
const dcsCarpenterInput = document.getElementById('dcsCarpenter');
const contractCarpenterInput = document.getElementById('contractCarpenter');
const dcsLabourInput = document.getElementById('dcsLabour');
const contractLabourInput = document.getElementById('contractLabour');

const totalExpensesDisplay = document.getElementById('totalExpenses');
const profitDisplay = document.getElementById('profitDisplay');

// Event listener for work dropdown change
workDropdown.addEventListener('change', (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    ratePerSqFtInput.value = selectedOption.getAttribute('data-rate');
    targetAreaInput.value = selectedOption.getAttribute('data-target');
    expectedBillingInput.value = selectedOption.getAttribute('data-billing');

    // Update the Expected Billing Amount display
    expectedBillingAmountDisplay.textContent = `Expected Billing: Rs. ${expectedBillingInput.value}`;

    calculateProfit();
});

// Function to calculate total expenses
function calculateExpenses() {
    const dcsMason = parseInt(dcsMasonInput.value) || 0;
    const contractMason = parseInt(contractMasonInput.value) || 0;
    const dcsHelper = parseInt(dcsHelperInput.value) || 0;
    const contractHelper = parseInt(contractHelperInput.value) || 0;
    const dcsCarpenter = parseInt(dcsCarpenterInput.value) || 0;
    const contractCarpenter = parseInt(contractCarpenterInput.value) || 0;
    const dcsLabour = parseInt(dcsLabourInput.value) || 0;
    const contractLabour = parseInt(contractLabourInput.value) || 0;

    const totalExpenses = (dcsMason * 900 + contractMason * 750) +
        (dcsCarpenter * 600 + contractCarpenter * 550) +
        (dcsHelper * 700 + contractHelper * 700) +
        (dcsLabour * 800 + contractLabour * 650);

    totalExpensesDisplay.textContent = `Rs. ${totalExpenses}`;
    return totalExpenses;
}

// Function to calculate profit
function calculateProfit() {
    const totalBilling = parseInt(expectedBillingInput.value) || 0;
    const totalExpenses = calculateExpenses();
    const profit = totalBilling - totalExpenses;

    const profitSpan = profitDisplay.querySelector('.amount');
    profitSpan.textContent = `Rs. ${profit}`;
    profitSpan.style.color = profit >= 0 ? 'green' : 'red';
}

// Event listeners for employee inputs
const employeeInputs = document.querySelectorAll('#expenseForm input');
employeeInputs.forEach(input => input.addEventListener('input', calculateProfit));

// Initialize the form
workDropdown.dispatchEvent(new Event('change'));

let submit = document.getElementById("calculateBtn")

submit.addEventListener('click', ()=>{
    let project_name = document.getElementById("projectName").value
    let work = document.getElementById("work").value
    let rateperSq = document.getElementById("ratePerSqFt").value
    let targetarea = document.getElementById("targetArea").value
    let expectedbilling = document.getElementById("expectedBilling").value
    let totalexpense = document.getElementById("totalExpenses").value
    let estimatedprofit = document.getElementById("profitDisplay").value

    console.log([project_name, work, rateperSq, targetarea, expectedbilling, totalexpense, estimatedprofit , dcsMason.value, contractMason.value, dcsHelper.value, contractHelper.value, dcsCarpenter.value, contractCarpenter.value, dcsLabour.value, contractLabour.value])
})