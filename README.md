# 🚀 Full-Stack Authentication System (MERN) (Frontend version)

This repository (backend is in separate repo) contains a robust implementation of a User Authentication & Authorization system built using the **MERN** stack (MongoDB, Express, React, Node.js). This project serves as a comprehensive guide for implementing secure user flows in modern web applications.

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue.svg)](https://mongodb.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JWT](https://img.shields.io/badge/Authentication-JWT-orange.svg)](https://jwt.io/)

---

## 📖 Overview
Authentication is a critical component of web security. This project demonstrates industry-standard practices for handling user credentials, including password hashing with **Bcrypt** and session management using **JSON Web Tokens (JWT)**.

### Key Features
* **Secure Registration:** User sign-up with server-side password encryption.
* **JWT Authentication:** Token-based login system for stateless security.
* **Protected Routes:** Backend middleware and Frontend guards to restrict unauthorized access.
* **Password Hashing:** Utilizing `bcryptjs` for secure data storage.
* **Responsive UI:** A clean interface built with React for seamless user interaction.

---

## 🛠 Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React.js, Axios, React Router |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Atlas) |
| **Security** | JSON Web Tokens (JWT), Bcrypt.js |

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** (v14.x or higher)
* **MongoDB** (Local instance or Atlas Cluster)
* **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/SudhanshuDubey5001/AuthorizationDemo_MediumArticle.git](https://github.com/SudhanshuDubey5001/AuthorizationDemo_MediumArticle.git)
   cd AuthorizationDemo_MediumArticle
   ```
2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```
3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```
   
**Environment Configuration**
   Create a .env file in the backend folder and configure your variables:
   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   SECRET_KEY=your_secret_key_here
   ```

**Running The App**
   Run both servers simultaneously:
   * **Backend**: cd backend && npm start (Runs on port 4000)
   * **Frontend**: cd frontend && npm start (Runs on port 3000)

## 🔐 API Endpoints
Method,Endpoint,Description:
* POST,/api/auth/register,Create a new user account
* POST,/api/auth/login,Authenticate user & return JWT
* GET,/api/user/profile,Access protected data (Requires Token)

## 📝 Reference
This project is based on the Medium article series by Sudhanshu Dubey.

## 🤝 Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

**Maintained By abedehakims with ❤️**
