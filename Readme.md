# 📌 Loan EMI Calculator

## 🚀 Features
- Dynamic loan repayment schedule generation 📆
- Calculates EMI, interest, principal, and balance 💰
- Professional and stylish UI 🎨
- REST API-based backend for smooth communication 🔗

## 🛠️ Tech Stack
- **Frontend**: React ⚛️ (for a dynamic and interactive UI)
- **Backend**: Node.js + Express.js 🚀 (for handling API requests efficiently)
- **Deployment**: Render (Backend) & Vercel (Frontend) 🌍

## 📊 Algorithm - EMI Calculation & Repayment Schedule
We use the standard EMI formula:

📌 **EMI = [P × r × (1 + r)^n] / [(1 + r)^n - 1]**

Where:
- **P** = Principal Loan Amount
- **r** = Monthly Interest Rate (Annual Rate / 12 / 100)
- **n** = Loan Tenure (in months)

The repayment schedule iterates through the tenure, deducting principal & computing outstanding balance until fully paid.

## 🚢 Deployment
### 🌐 Backend (Render)
The backend is deployed on **Render**, providing a scalable and reliable server environment.

### 🎨 Frontend (Vercel)
The frontend is hosted on **Vercel**, ensuring fast performance and smooth user experience.

### 🔗 API Communication
Communication between frontend and backend happens through **REST APIs**, ensuring a seamless data exchange between the UI and backend logic.

## 📎 How to Use
1️⃣ Enter loan details (amount, interest rate, tenure, etc.)
2️⃣ Click 'Calculate' 🔢
3️⃣ View EMI and repayment schedule 📜

Enjoy using our **Loan EMI Calculator**! 🎉







