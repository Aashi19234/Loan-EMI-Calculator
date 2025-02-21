import React, { useState } from "react";

import LoanRepayment from "./LoanRepayment";

const App = () => {
  const [schedule, setSchedule] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Loan Calculator</h1>
  <LoanRepayment/>
    </div>
  );
};

export default App;
