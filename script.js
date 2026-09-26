/* ================= LOAN CALCULATOR ================= */

function calculateLoan() {

    const loanInput =
        document.getElementById("loanAmount");

    const rateInput =
        document.getElementById("interestRate");

    const tenureInput =
        document.getElementById("loanTenure");

    const result =
        document.getElementById("loanResult");


    if (
        !loanInput ||
        !rateInput ||
        !tenureInput ||
        !result
    ) {
        return;
    }


    const principal =
        parseFloat(loanInput.value);

    const annualRate =
        parseFloat(rateInput.value);

    const years =
        parseFloat(tenureInput.value);


    if (
        isNaN(principal) ||
        isNaN(annualRate) ||
        isNaN(years) ||
        principal <= 0 ||
        annualRate < 0 ||
        years <= 0
    ) {

        result.innerHTML =
            "Please enter valid loan details.";

        return;
    }


    const months =
        years * 12;

    const monthlyRate =
        annualRate / 12 / 100;


    let monthlyPayment;


    if (monthlyRate === 0) {

        monthlyPayment =
            principal / months;

    } else {

        monthlyPayment =
            principal *
            monthlyRate *
            Math.pow(
                1 + monthlyRate,
                months
            ) /
            (
                Math.pow(
                    1 + monthlyRate,
                    months
                ) - 1
            );

    }


    const totalPayment =
        monthlyPayment * months;


    const totalInterest =
        totalPayment - principal;


    result.innerHTML = `

        <strong>
            Monthly Payment: ₹${monthlyPayment.toFixed(2)}
        </strong>

        <br><br>

        <strong>
            Total Interest: ₹${totalInterest.toFixed(2)}
        </strong>

        <br><br>

        <strong>
            Total Payment: ₹${totalPayment.toFixed(2)}
        </strong>

    `;

}