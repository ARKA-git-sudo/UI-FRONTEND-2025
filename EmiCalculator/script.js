document.addEventListener("DOMContentLoaded", function () {
  const loanAmountInput = document.getElementById("loanAmount");
  const interestInput = document.getElementById("interest");
  const durationInput = document.getElementById("duration");
  const loanAmountDisplay = document.getElementById("loanAmountDisplay");
  const interestDisplay = document.getElementById("interestDisplay");
  const durationDisplay = document.getElementById("durationDisplay");
  const result = document.getElementById("emiResult");

  function updateEmi() {
    const loan_Amount = parseFloat(loanAmountInput.value);
    const annual_interest_rate = parseFloat(interestInput.value);
    const loan_duration = parseFloat(durationInput.value);

    const monthlyInterestRate = annual_interest_rate / (12 * 100);
    const no_of_months = loan_duration * 12;

    const emi =
      (loan_Amount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, no_of_months)) /
      (Math.pow(1 + monthlyInterestRate, no_of_months) - 1);

    loanAmountDisplay.textContent = `₹ ${loan_Amount.toLocaleString()}`;
    interestDisplay.textContent = `${annual_interest_rate}%`;
    durationDisplay.textContent = `${loan_duration} Yr`;

    result.textContent = emi.toFixed(2);
  }

  loanAmountInput.addEventListener("input", updateEmi);
  interestInput.addEventListener("input", updateEmi);
  durationInput.addEventListener("input", updateEmi);

  updateEmi();
});
