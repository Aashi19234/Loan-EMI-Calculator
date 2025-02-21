import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">LoanEMIPro</h1>
          <button
            className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
            onClick={() => navigate("/calculator")}
          >
            Use Calculator
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center p-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Calculate Your EMI Instantly
        </h2>
        <p className="text-lg text-gray-600 max-w-xl">
          A fast, accurate, and user-friendly Loan EMI Calculator to help you 
          plan your repayments efficiently.
        </p>
        <button
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          onClick={() => navigate("/calculator")}
        >
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Why Use LoanEMIPro?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Accurate EMI Calculation</h4>
              <p className="text-gray-600">Get precise calculations based on interest rates, tenure, and principal.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Easy to Use</h4>
              <p className="text-gray-600">Simply enter the loan details, and our tool does the rest for you.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Detailed Repayment Schedule</h4>
              <p className="text-gray-600">View a breakdown of interest, principal, and outstanding balance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 LoanEMIPro. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
