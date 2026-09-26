// ==========================================
// SMARTTOOLS - FINAL MAIN JAVASCRIPT
// ==========================================


// ==========================================
// COMMON HELPERS
// ==========================================

function getNumber(id) {
    const element = document.getElementById(id);

    if (!element) {
        return NaN;
    }

    return parseFloat(element.value);
}


function formatNumber(number) {
    return Number(number).toLocaleString("en-IN", {
        maximumFractionDigits: 2
    });
}


// ==========================================
// HOME PAGE
// ==========================================

function scrollToTools() {

    const tools = document.getElementById("tools");

    if (tools) {
        tools.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// ==========================================
// AGE CALCULATOR
// ==========================================

function calculateAge() {

    const dobInput = document.getElementById("dob");
    const result = document.getElementById("ageResult");

    if (!dobInput || !result) {
        return;
    }

    if (!dobInput.value) {
        result.innerHTML = "Please enter your date of birth.";
        return;
    }

    const birthDate = new Date(dobInput.value + "T00:00:00");
    const today = new Date();

    if (birthDate > today) {
        result.innerHTML = "Date of birth cannot be in the future.";
        return;
    }

    let years =
        today.getFullYear() -
        birthDate.getFullYear();

    let months =
        today.getMonth() -
        birthDate.getMonth();

    let days =
        today.getDate() -
        birthDate.getDate();


    if (days < 0) {

        months--;

        const previousMonth =
            new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            );

        days += previousMonth.getDate();
    }


    if (months < 0) {

        years--;

        months += 12;
    }


    result.innerHTML =
        "<strong>Your Exact Age:</strong><br><br>" +
        years + " Years, " +
        months + " Months, " +
        days + " Days";
}


// ==========================================
// EMI CALCULATOR
// ==========================================

function calculateEMI() {

    const loanAmount =
        getNumber("loanAmount");

    const interestRate =
        getNumber("interestRate");

    const loanTenure =
        getNumber("loanTenure");

    const result =
        document.getElementById("emiResult");


    if (!result) {
        return;
    }


    if (
        isNaN(loanAmount) ||
        isNaN(interestRate) ||
        isNaN(loanTenure) ||
        loanAmount <= 0 ||
        interestRate < 0 ||
        loanTenure <= 0
    ) {

        result.innerHTML =
            "Please enter valid loan details.";

        return;
    }


    const monthlyRate =
        interestRate / 12 / 100;

    const months =
        loanTenure * 12;


    let emi;


    if (monthlyRate === 0) {

        emi =
            loanAmount / months;

    } else {

        emi =
            loanAmount *
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
        emi * months;

    const totalInterest =
        totalPayment - loanAmount;


    result.innerHTML =
        "<strong>Monthly EMI:</strong> ₹" +
        formatNumber(emi) +

        "<br><strong>Total Interest:</strong> ₹" +
        formatNumber(totalInterest) +

        "<br><strong>Total Payment:</strong> ₹" +
        formatNumber(totalPayment);
}


// ==========================================
// LOAN CALCULATOR
// ==========================================

function calculateLoan() {

    const loanAmount =
        getNumber("loanAmount");

    const interestRate =
        getNumber("interestRate");

    const loanTenure =
        getNumber("loanTenure");

    const result =
        document.getElementById("loanResult");


    if (!result) {
        return;
    }


    if (
        isNaN(loanAmount) ||
        isNaN(interestRate) ||
        isNaN(loanTenure) ||
        loanAmount <= 0 ||
        interestRate < 0 ||
        loanTenure <= 0
    ) {

        result.innerHTML =
            "Please enter valid loan details.";

        return;
    }


    const monthlyRate =
        interestRate / 12 / 100;

    const months =
        loanTenure * 12;


    let emi;


    if (monthlyRate === 0) {

        emi =
            loanAmount / months;

    } else {

        emi =
            loanAmount *
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
        emi * months;

    const totalInterest =
        totalPayment - loanAmount;


    result.innerHTML =
        "<strong>Monthly Payment:</strong> ₹" +
        formatNumber(emi) +

        "<br><strong>Total Interest:</strong> ₹" +
        formatNumber(totalInterest) +

        "<br><strong>Total Payment:</strong> ₹" +
        formatNumber(totalPayment);
}


// ==========================================
// PERCENTAGE CALCULATOR
// ==========================================

function calculatePercentage() {

    const percentage =
        getNumber("percentage");

    const number =
        getNumber("number");

    const result =
        document.getElementById(
            "percentageResult"
        );


    if (!result) {
        return;
    }


    if (
        isNaN(percentage) ||
        isNaN(number)
    ) {

        result.innerHTML =
            "Please enter valid numbers.";

        return;
    }


    const answer =
        (percentage * number) / 100;


    result.innerHTML =
        "<strong>" +
        percentage +
        "% of " +
        number +
        " = " +
        formatNumber(answer) +
        "</strong>";
}


// ==========================================
// GST CALCULATOR
// ==========================================

function calculateGST() {

    const amount =
        getNumber("gstAmount");

    const rate =
        getNumber("gstRate");

    const result =
        document.getElementById(
            "gstResult"
        );


    if (!result) {
        return;
    }


    if (
        isNaN(amount) ||
        isNaN(rate) ||
        amount < 0 ||
        rate < 0
    ) {

        result.innerHTML =
            "Please enter valid GST details.";

        return;
    }


    const gstAmount =
        amount * rate / 100;

    const finalAmount =
        amount + gstAmount;


    result.innerHTML =
        "<strong>GST Amount:</strong> ₹" +
        formatNumber(gstAmount) +

        "<br><strong>Final Amount:</strong> ₹" +
        formatNumber(finalAmount);
}


// ==========================================
// SIP CALCULATOR
// ==========================================

function calculateSIP() {

    const monthlyInvestment =
        getNumber("monthlyInvestment");

    const annualReturn =
        getNumber("expectedReturn");

    const years =
        getNumber("investmentPeriod");

    const result =
        document.getElementById(
            "sipResult"
        );


    if (!result) {
        return;
    }


    if (
        isNaN(monthlyInvestment) ||
        isNaN(annualReturn) ||
        isNaN(years) ||
        monthlyInvestment <= 0 ||
        annualReturn < 0 ||
        years <= 0
    ) {

        result.innerHTML =
            "Please enter valid SIP details.";

        return;
    }


    const months =
        years * 12;

    const monthlyRate =
        annualReturn / 12 / 100;


    let futureValue;


    if (monthlyRate === 0) {

        futureValue =
            monthlyInvestment * months;

    } else {

        futureValue =
            monthlyInvestment *
            (
                (
                    Math.pow(
                        1 + monthlyRate,
                        months
                    ) - 1
                ) /
                monthlyRate
            ) *
            (1 + monthlyRate);
    }


    const totalInvestment =
        monthlyInvestment * months;

    const estimatedReturns =
        futureValue - totalInvestment;


    result.innerHTML =
        "<strong>Total Investment:</strong> ₹" +
        formatNumber(totalInvestment) +

        "<br><strong>Estimated Returns:</strong> ₹" +
        formatNumber(estimatedReturns) +

        "<br><strong>Future Value:</strong> ₹" +
        formatNumber(futureValue);
}


// ==========================================
// DISCOUNT CALCULATOR
// ==========================================

function calculateDiscount() {

    const originalPrice =
        getNumber("originalPrice");

    const discountPercent =
        getNumber("discountPercent");

    const result =
        document.getElementById(
            "discountResult"
        );


    if (!result) {
        return;
    }


    if (
        isNaN(originalPrice) ||
        isNaN(discountPercent) ||
        originalPrice < 0 ||
        discountPercent < 0 ||
        discountPercent > 100
    ) {

        result.innerHTML =
            "Please enter a valid price and discount percentage.";

        return;
    }


    const discountAmount =
        originalPrice *
        discountPercent /
        100;


    const finalPrice =
        originalPrice -
        discountAmount;


    result.innerHTML =
        "<strong>Discount Amount:</strong> ₹" +
        formatNumber(discountAmount) +

        "<br><br><strong>You Save:</strong> ₹" +
        formatNumber(discountAmount) +

        "<br><br><strong>Final Price:</strong> ₹" +
        formatNumber(finalPrice);
}


// ==========================================
// KM TO MILES
// ==========================================

function convertKMToMiles() {

    const km =
        getNumber("km");

    const result =
        document.getElementById(
            "kmResult"
        );


    if (!result) {
        return;
    }


    if (
        isNaN(km) ||
        km < 0
    ) {

        result.innerHTML =
            "Please enter a valid distance.";

        return;
    }


    const miles =
        km * 0.621371;


    result.innerHTML =
        "<strong>" +
        formatNumber(km) +
        " KM = " +
        formatNumber(miles) +
        " Miles</strong>";
}


// ==========================================
// WORD COUNTER
// ==========================================

function countWords() {

    const input =
        document.getElementById(
            "wordText"
        );

    const result =
        document.getElementById(
            "wordResult"
        );


    if (!input || !result) {
        return;
    }


    const text =
        input.value.trim();


    if (!text) {

        result.innerHTML =
            "<strong>Word Count: 0</strong>";

        return;
    }


    const words =
        text.split(/\s+/).filter(Boolean);

    const wordCount =
        words.length;

    const characterCount =
        text.length;

    const charactersWithoutSpaces =
        text.replace(/\s/g, "").length;


    result.innerHTML =
        "<strong>Word Count:</strong> " +
        wordCount +

        "<br><br><strong>Characters:</strong> " +
        characterCount +

        "<br><br><strong>Characters Without Spaces:</strong> " +
        charactersWithoutSpaces;
}


// ==========================================
// CHARACTER COUNTER
// ==========================================

function countCharacters() {

    const input =
        document.getElementById(
            "characterText"
        );

    const result =
        document.getElementById(
            "characterResult"
        );


    if (!input || !result) {
        return;
    }


    const text =
        input.value;


    const characterCount =
        text.length;

    const charactersWithoutSpaces =
        text.replace(/\s/g, "").length;

    const words =
        text.trim() === ""
            ? 0
            : text.trim().split(/\s+/).length;

    const lines =
        text === ""
            ? 0
            : text.split(/\r?\n/).length;


    result.innerHTML =
        "<strong>Character Count:</strong> " +
        characterCount +

        "<br><br><strong>Characters Without Spaces:</strong> " +
        charactersWithoutSpaces +

        "<br><br><strong>Word Count:</strong> " +
        words +

        "<br><br><strong>Line Count:</strong> " +
        lines;
}


// ==========================================
// CASE CONVERTER
// ==========================================

function convertUpperCase() {

    const input =
        document.getElementById(
            "caseText"
        );

    const result =
        document.getElementById(
            "caseResult"
        );


    if (!input || !result) {
        return;
    }


    result.innerHTML =
        "<strong>UPPERCASE</strong><br><br>" +
        escapeHTML(
            input.value.toUpperCase()
        ).replace(/\n/g, "<br>");
}


function convertLowerCase() {

    const input =
        document.getElementById(
            "caseText"
        );

    const result =
        document.getElementById(
            "caseResult"
        );


    if (!input || !result) {
        return;
    }


    result.innerHTML =
        "<strong>lowercase</strong><br><br>" +
        escapeHTML(
            input.value.toLowerCase()
        ).replace(/\n/g, "<br>");
}


function convertTitleCase() {

    const input =
        document.getElementById(
            "caseText"
        );

    const result =
        document.getElementById(
            "caseResult"
        );


    if (!input || !result) {
        return;
    }


    const titleCase =
        input.value
            .toLowerCase()
            .replace(
                /\b\w/g,
                function(letter) {
                    return letter.toUpperCase();
                }
            );


    result.innerHTML =
        "<strong>Title Case</strong><br><br>" +
        escapeHTML(
            titleCase
        ).replace(/\n/g, "<br>");
}


function convertSentenceCase() {

    const input =
        document.getElementById(
            "caseText"
        );

    const result =
        document.getElementById(
            "caseResult"
        );


    if (!input || !result) {
        return;
    }


    const sentenceCase =
        input.value
            .toLowerCase()
            .replace(
                /(^\s*\w|[.!?]\s+\w)/g,
                function(letter) {
                    return letter.toUpperCase();
                }
            );


    result.innerHTML =
        "<strong>Sentence Case</strong><br><br>" +
        escapeHTML(
            sentenceCase
        ).replace(/\n/g, "<br>");
}


// ==========================================
// REMOVE DUPLICATE LINES
// ==========================================

function removeDuplicateLines() {

    const input =
        document.getElementById(
            "duplicateText"
        );

    const result =
        document.getElementById(
            "duplicateResult"
        );


    if (!input || !result) {
        return;
    }


    const text =
        input.value;


    if (text.trim() === "") {

        result.innerHTML =
            "<strong>Please enter some text.</strong>";

        return;
    }


    const lines =
        text.split(/\r?\n/);


    const uniqueLines = [];

    const seen =
        new Set();


    lines.forEach(function(line) {

        const cleanLine =
            line.trim();


        if (cleanLine === "") {
            return;
        }


        const key =
            cleanLine.toLowerCase();


        if (!seen.has(key)) {

            seen.add(key);

            uniqueLines.push(
                cleanLine
            );
        }

    });


    const originalCount =
        lines.filter(
            line => line.trim() !== ""
        ).length;


    const uniqueCount =
        uniqueLines.length;


    const duplicatesRemoved =
        originalCount -
        uniqueCount;


    result.innerHTML =
        "<strong>Cleaned Text</strong>" +
        "<br><br>" +

        escapeHTML(
            uniqueLines.join("\n")
        ).replace(/\n/g, "<br>") +

        "<br><br>" +

        "<strong>Original Lines:</strong> " +
        originalCount +

        "<br><strong>Unique Lines:</strong> " +
        uniqueCount +

        "<br><strong>Duplicates Removed:</strong> " +
        duplicatesRemoved;
}


// ==========================================
// ESCAPE HTML
// ==========================================

function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ==========================================
// CONTACT FORM
// ==========================================

function sendContactMessage(event) {

    if (event) {
        event.preventDefault();
    }


    const name =
        document.getElementById(
            "contactName"
        );

    const email =
        document.getElementById(
            "contactEmail"
        );

    const subject =
        document.getElementById(
            "contactSubject"
        );

    const message =
        document.getElementById(
            "contactMessage"
        );

    const status =
        document.getElementById(
            "contactStatus"
        );


    if (
        !name ||
        !email ||
        !subject ||
        !message ||
        !status
    ) {
        return false;
    }


    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        subject.value.trim() === "" ||
        message.value.trim() === ""
    ) {

        status.innerHTML =
            "Please fill in all fields.";

        return false;
    }


    status.innerHTML =
        "Thank you! Your message has been received. We will get back to you soon.";


    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";


    return false;
}


// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        // Discount Calculator
        const discountButton =
            document.getElementById(
                "discountButton"
            );

        if (discountButton) {

            discountButton.addEventListener(
                "click",
                calculateDiscount
            );
        }


        // KM to Miles
        const convertButton =
            document.getElementById(
                "convertButton"
            );

        if (convertButton) {

            convertButton.addEventListener(
                "click",
                convertKMToMiles
            );
        }


        // Word Counter
        const wordButton =
            document.getElementById(
                "wordCountButton"
            );

        if (wordButton) {

            wordButton.addEventListener(
                "click",
                countWords
            );
        }


        // Character Counter
        const characterButton =
            document.getElementById(
                "characterCountButton"
            );

        if (characterButton) {

            characterButton.addEventListener(
                "click",
                countCharacters
            );
        }

    }
);