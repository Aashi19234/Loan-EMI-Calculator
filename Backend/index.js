const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/calculate-loan", (req, res) => {
  const { principal, tenure, interestRate, emiFrequency, moratoriumPeriod, disbursementDate } = req.body;

  const frequencyMap = {
    monthly: 12,
    quarterly: 4,
    yearly: 1
  };

  const totalPayments = tenure * frequencyMap[emiFrequency];
  const monthlyRate = interestRate / 12 / 100;

  // EMI Calculation
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
              (Math.pow(1 + monthlyRate, totalPayments) - 1);
  
  let schedule = [];
  let balance = principal;
  let currentDate = new Date(disbursementDate);

  // Generate the repayment schedule
  for (let i = 1; i <= totalPayments; i++) {
    let interest = balance * monthlyRate;
    let principalPaid = emi - interest;
    balance -= principalPaid;

    schedule.push({
      date: currentDate.toISOString().split("T")[0], // Format YYYY-MM-DD
      interest: interest.toFixed(2),
      principal: principalPaid.toFixed(2),
      outstanding: balance.toFixed(2),
    });

    // Move to the next payment date
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  res.json({
    emi: emi.toFixed(2),
    schedule
  });
});

app.listen(5000, () => {
  console.log("Server running on 5000");
});

