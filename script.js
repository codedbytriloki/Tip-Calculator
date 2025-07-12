const billInput  = document.getElementById("bill-amount");
const tipTnput  = document.getElementById("tip-per");
const calculateBtn  = document.getElementById("calculateBtn");
const tipAmount = document.getElementById("tipAmount");
const totalAmount  = document.getElementById("totalAmount");

calculateBtn.addEventListener('click', () => {
  const bill = parseFloat(billInput.value);
  const tip = parseFloat(tipTnput.value);

  if(isNaN(bill) || isNaN(tip)){
    alert("Please enter valid number");
    return;
  }

  const tipAm = (bill * tip) / 100;
  const totalA = tipAm + bill;

  tipAmount.innerHTML = tipAm.toFixed(2);
  totalAmount.innerHTML = totalA.toFixed(2);
  
})