const workDropdown = document.getElementById('work');
const ratePerSqFtInput = document.getElementById('ratePerSqFt');
const targetAreaInput = document.getElementById('targetArea');
const expectedBillingInput = document.getElementById('expectedBilling');
const expectedBillingAmountDisplay = document.getElementById('expectedBillingAmount');

const numMasonInput = document.getElementById('numMason');
const numHelperInput = document.getElementById('numHelper');
const numCarpenterInput = document.getElementById('numCarpenter');
const numLabourInput = document.getElementById('numLabour');
const totalExpensesDisplay = document.getElementById('totalExpenses');

const profitDisplay = document.getElementById('profitDisplay');

// Define rates for employees
const rates = {
    masonDcs: 900,
    masonContract: 850,
    helperDcs: 700,
    helperContract: 600,
    carpenterDcs: 800,
    carpenterContract: 680,
    labourDcs: 600,
    labourContract: 570
};

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
    const numMasons = parseInt(numMasonInput.value) || 0;
    const numHelpers = parseInt(numHelperInput.value) || 0;
    const numCarpenters = parseInt(numCarpenterInput.value) || 0;
    const numLabours = parseInt(numLabourInput.value) || 0;

    const masonRate = document.querySelector('input[name="masonType"]:checked').value === 'dcs' ? rates.masonDcs : rates.masonContract;
    const helperRate = document.querySelector('input[name="helperType"]:checked').value === 'dcs' ? rates.helperDcs : rates.helperContract;
    const carpenterRate = document.querySelector('input[name="carpenterType"]:checked').value === 'dcs' ? rates.carpenterDcs : rates.carpenterContract;
    const labourRate = document.querySelector('input[name="labourType"]:checked').value === 'dcs' ? rates.labourDcs : rates.labourContract;

    const totalExpenses = (numMasons * masonRate) + (numHelpers * helperRate) + (numCarpenters * carpenterRate) + (numLabours * labourRate);
    totalExpensesDisplay.textContent = totalExpenses;
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
numMasonInput.addEventListener('input', calculateProfit);
numHelperInput.addEventListener('input', calculateProfit);
numCarpenterInput.addEventListener('input', calculateProfit);
numLabourInput.addEventListener('input', calculateProfit);
document.querySelectorAll('input[name="masonType"]').forEach(radio => radio.addEventListener('change', calculateProfit));
document.querySelectorAll('input[name="helperType"]').forEach(radio => radio.addEventListener('change', calculateProfit));
document.querySelectorAll('input[name="carpenterType"]').forEach(radio => radio.addEventListener('change', calculateProfit));
document.querySelectorAll('input[name="labourType"]').forEach(radio => radio.addEventListener('change', calculateProfit));

// Initialize the form
workDropdown.dispatchEvent(new Event('change'));
