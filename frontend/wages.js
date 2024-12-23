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

const contractMasonRateInput = document.getElementById('contractMasonRate');
const contractHelperRateInput = document.getElementById('contractHelperRate');
const contractCarpenterRateInput = document.getElementById('contractCarpenterRate');
const contractLabourRateInput = document.getElementById('contractLabourRate');

const totalExpensesDisplay = document.getElementById('totalExpenses');
const profitDisplay = document.getElementById('profitDisplay');

// Event listener for work dropdown change
workDropdown.addEventListener('change', (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    ratePerSqFtInput.value = selectedOption.getAttribute('data-rate');
    targetAreaInput.value = selectedOption.getAttribute('data-target');
    expectedBillingInput.value = ratePerSqFtInput.value*targetAreaInput.value

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
    const contractMasonRate = parseInt(contractMasonRateInput.value) || 0;
    const contractHelperRate = parseInt(contractHelperRateInput.value) || 0;
    const contractCarpenterRate = parseInt(contractCarpenterRateInput.value) || 0;
    const contractLabourRate = parseInt(contractLabourRateInput.value) || 0;

    if(dcsMason < 0 || contractMason < 0 || dcsHelper < 0 || contractHelper < 0 || dcsCarpenter < 0 || contractCarpenter < 0 || dcsLabour < 0 || contractLabour < 0){
        alert("Negative values not allowed")
        dcsMasonInput.value = 0
        contractMasonInput.value = 0
        dcsHelperInput.value = 0
        contractHelperInput.value = 0
        dcsCarpenterInput.value = 0
        contractCarpenterInput.value = 0
        dcsLabourInput.value = 0
        contractLabourInput.value = 0
    }

    const totalExpenses = (dcsMason * 900 + contractMason * contractMasonRate) +
        (dcsCarpenter * 600 + contractCarpenter * contractCarpenterRate) +
        (dcsHelper * 700 + contractHelper * contractHelperRate) +
        (dcsLabour * 800 + contractLabour * contractLabourRate);

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
    let expectedBilling = document.getElementById("expectedBilling").value
    let employeeExpense = calculateExpenses()

    console.log({
        //?work
        "Project": project_name,
        "Work": work,
        "Rate Per Sq. Ft.": parseInt(rateperSq),
        "Target Area": parseInt(targetarea),
        //?mason
        "DCS Mason": parseInt(dcsMasonInput.value) || 0,
        "Contract Mason": parseInt(contractMasonInput.value) || 0,
        "Contractor Mason Rate": parseInt(contractMasonRateInput.value) || 0,
        //?helper
        "DCS Helper": parseInt(dcsHelperInput.value) || 0,
        "Contracr Helper": parseInt(contractHelperInput.value) || 0,
        "Contractor Helper Rate": parseInt(contractHelperRateInput.value) || 0,
        //?carpenter
        "DCS Carpenter": parseInt(dcsCarpenterInput.value) || 0,
        "Contract Carpenter": parseInt(contractCarpenterInput.value) || 0,
        "Contractor Carpenter Rate": parseInt(contractCarpenterRateInput.value) || 0,
        //?labour
        "DCS Labour": parseInt(dcsLabourInput.value) || 0,
        "Contract Labour": parseInt(contractLabourInput.value) || 0,
        "Contractor Labour Rate": parseInt(contractLabourRateInput.value) || 0,
        //?billing amounts
        "Expected Billing": parseInt(expectedBilling) || 0,
        "Employee Expenses": parseInt(employeeExpense) || 0,
    })

    let projectData = {
        Project: project_name,
        Work: work,
        RatePerSqFt: parseInt(rateperSq),
        TargetArea: parseInt(targetarea),
        //?mason
        DCS_Mason: parseInt(dcsMasonInput.value) || 0,
        Contract_Mason: parseInt(contractMasonInput.value) || 0,
        Contractor_Mason_Rate: parseInt(contractMasonRateInput.value) || 0,
        //?helper
        DCS_Helper: parseInt(dcsHelperInput.value) || 0,
        Contracr_Helper: parseInt(contractHelperInput.value) || 0,
        Contractor_Helper_Rate: parseInt(contractHelperRateInput.value) || 0,
        //?carpenter
        DCS_Carpenter: parseInt(dcsCarpenterInput.value) || 0,
        Contract_Carpenter: parseInt(contractCarpenterInput.value) || 0,
        Contractor_Carpenter_Rate: parseInt(contractCarpenterRateInput.value) || 0,
        //?labour
        DCS_Labour: parseInt(dcsLabourInput.value) || 0,
        Contract_Labour: parseInt(contractLabourInput.value) || 0,
        Contractor_Labour_Rate: parseInt(contractLabourRateInput.value) || 0,
        //?billing amounts
        Expected_Billing: parseInt(expectedBilling) || 0,
        Employee_Expenses: parseInt(employeeExpense) || 0,
    }

    fetch("http://localhost:3000/api/v1/project-data/add",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectData)
    })
    .then(response => response.json())
    .then(data =>{
        alert("Project data saved successfully.")
        window.location.reload()
    })
    .catch(error => {
        alert("Error saving the data.")
    })
})