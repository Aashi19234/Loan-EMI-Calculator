import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import LandingPage from './LandingPage.jsx'
import LoanRepayment from './LoanRepayment.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/calculator" element={<LoanRepayment/>}/>
        <Route path="*" element={<App />} />
      </Routes>

    </Router>
    
  </StrictMode>,
)
