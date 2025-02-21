import { useState } from "react";

function LoanRepayment() {
  const [loanDetails, setLoanDetails] = useState({
    principal: 100000,
    tenure: 12,
    emiFrequency: "monthly",
    interestRate: 10,
    disbursementDate: "2024-02-21",
  });

  const [emi, setEmi] = useState("");
  const [schedule, setSchedule] = useState([]);

  const handleChange = (e) => {
    setLoanDetails({ ...loanDetails, [e.target.name]: e.target.value });
  };

  const calculateLoan = () => {
    fetch("https://loan-emi-calculator-1.onrender.com/calculate-loan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loanDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        setEmi(data.emi);
        setSchedule(data.schedule);
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Loan EMI Calculator</h1>

        {/* Loan Form */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium">Principal Amount</label>
            <input
              type="number"
              name="principal"
              value={loanDetails.principal}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium">Tenure (Years)</label>
            <input
              type="number"
              name="tenure"
              value={loanDetails.tenure}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium">EMI Frequency</label>
            <select
              name="emiFrequency"
              value={loanDetails.emiFrequency}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            >
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium">Interest Rate (%)</label>
            <input
              type="number"
              name="interestRate"
              value={loanDetails.interestRate}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-600 text-sm font-medium">Disbursement Date</label>
            <input
              type="date"
              name="disbursementDate"
              value={loanDetails.disbursementDate}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <button
          onClick={calculateLoan}
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition"
        >
          Calculate EMI
        </button>

        {/* EMI Display */}
        {emi && (
          <div className="mt-6 p-4 bg-gray-200 rounded-md text-center">
            <h2 className="text-lg font-semibold text-gray-800">Monthly EMI: ₹{emi}</h2>
          </div>
        )}

        {/* EMI Schedule Table */}
        {schedule.length > 0 && (
          <div className="mt-6 overflow-x-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Loan Repayment Schedule</h3>
            <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="p-2">#</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Interest Paid</th>
                  <th className="p-2">Principal Paid</th>
                  <th className="p-2">Balance</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((item, index) => (
                  <tr
                    key={index}
                    className={`text-center ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                  >
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">{item.date}</td>
                    <td className="p-2">₹{item.interest}</td>
                    <td className="p-2">₹{item.principal}</td>
                    <td className="p-2">₹{item.outstanding}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoanRepayment;
