# Cybersecurity Internship 2026 - Final Portfolio
**Intern:** Muhammad Hamza  
**Role:** Cybersecurity Intern & Captain of Team Hack4Bug  
**Lead:** Faizan Khan  

## 🛡️ Project Overview
This repository contains the complete documentation and technical implementations for my cybersecurity internship (Weeks 4, 5, and 6). The project focuses on identifying web vulnerabilities, implementing defensive measures, and conducting advanced security audits.

---

## 🚀 Key Accomplishments

### 📁 Week 4 & 5: Exploitation & Mitigation
- **SQL Injection (SQLi):** Identified manual entry points and verified vulnerability using `curl`.
- **CSRF Protection:** Implemented the `csurf` middleware and synchronized token pattern to prevent Cross-Site Request Forgery.
- **Manual Testing:** Used **Burp Suite** to intercept and modify requests, ensuring the security logic works as expected.

### 📁 Week 6: Advanced Security Audits (Final Phase)
- **Automated Scanning:** Conducted a full application audit using **OWASP ZAP** and **Nikto**.
- **Security Hardening:** Integrated **Helmet.js** to implement essential HTTP headers (`X-Frame-Options`, `X-Content-Type-Options`).
- **Dependency Scanning:** Used `npm audit` to identify and patch high-severity ReDoS (Denial of Service) vulnerabilities.
- **Audit Result:** Achieved **0 High Risks** in the final OWASP ZAP report.

---

## 🛠️ Tools & Technologies Used
- **Scanning:** OWASP ZAP, Nikto, Lynis
- **Proxy/Exploitation:** Burp Suite, SQLMap, Curl
- **Backend:** Node.js, Express.js
- **Security Middleware:** Helmet.js, Csurf, Cookie-Parser
- **Version Control:** Git & GitHub

---

## 📊 Final Audit Summary
| Risk Level | Status |
| :--- | :--- |
| **High** | 🟢 0 Identified |
| **Medium** | 🟡 1 Identified |
| **Low** | 🔵 6 Identified |

---

*Developed as part of the 2026 Cybersecurity Internship Program.*
