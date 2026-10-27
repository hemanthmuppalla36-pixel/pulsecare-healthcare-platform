# 🏥 PulseCare - Advanced Healthcare & Clinical Management Platform

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)
[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-5.x-lightgrey.svg)](https://expressjs.com)
[![Status](https://img.shields.io/badge/Render-Ready-blue.svg)](https://render.com)

A modern, full-stack, enterprise-grade Healthcare and Hospital Management System featuring an **interactive clinical dashboard**, **doctor directory and booking engine**, **Electronic Health Records (EHR)**, **digital prescription generator**, **AI-driven symptom checker/triage assistant**, and **telehealth video consultation room**.

Designed to run locally with zero database setup hurdles and deploy directly to **Render** with a single click.

---

## 🌟 Key Features

### 1. 📊 Executive Clinical Dashboard & Analytics
- Live health operations KPIs: Total Patients, Specialist Physicians, Active Bookings, and Digital EHR Records.
- Interactive **specialty distribution doughnut chart** powered by Chart.js.
- Real-time appointment schedule feed with one-click **Confirmation** and status tracking.

### 2. 🩺 Specialist Physician Directory & Booking Engine
- Search doctors by name, medical specialty, or clinical condition treated.
- Filter across 6 departments: Cardiology, Neurology, Pediatrics, Orthopedics, Dermatology, and General Medicine.
- Detailed physician profile cards with verified ratings, reviews count, years of experience, credentials, and consultation fees.
- Interactive booking modal with dynamic date picker, time slot chip selector, and consultation mode options.

### 3. 🗓️ Outpatient Appointment Management
- Filter bookings by status: `All`, `Scheduled`, `Confirmed`, `Completed`, `Cancelled`.
- In-place appointment status workflow (Confirm, Complete, Cancel).
- Launch simulated **Telehealth HD Video Sessions** with encryption status, session duration timer, and live clinical notepad.

### 4. 🧠 Smart Clinical Symptom Checker & Triage Engine
- Algorithmic triage that analyzes patient complaints, severity levels (*Mild*, *Moderate*, *Severe*), duration, and patient age.
- Generates urgency scoring (`Emergency`, `High`, `Moderate`, `Low`) with colored alerts.
- Recommends the optimal clinical department and specific specialist physician.
- Provides immediate home care advice and red-flag warning indicators with direct 1-click booking.

### 5. 📋 Electronic Health Records (EHR) & Digital Prescriptions
- Patient EHR history: Vital signs monitoring (Blood Pressure, Heart Rate, SpO2, Temperature), clinical encounter notes, and diagnostic lab test results.
- **Digital Prescription Generator**: View and print official medical prescriptions (`Rx`) with doctor sign-off line, posology schedules, and pharmacy stamps.
- Add new clinical notes and prescription orders directly from the UI.

### 6. 👥 Patient Directory & Demographic Enrollment
- Comprehensive patient profiles including blood groups, emergency contacts, known drug/food allergies, chronic conditions, and insurance policy details.
- Modal to enroll new patients with immediate validation and database persistence.

---

## 🏗️ Project Architecture

```
healthcare-platform/
├── server.js               # Express 5.x server with REST APIs & static frontend serving
├── package.json            # Node.js dependencies and run scripts
├── render.yaml             # Render Blueprint specification for 1-click cloud deploy
├── .gitignore              # Git ignore rules
├── README.md               # Documentation and deployment manual
├── data/
│   ├── db.json             # Seeded JSON database (physicians, patients, appointments, EHR)
│   └── store.js            # Thread-safe data access layer
├── routes/
│   ├── doctors.js          # /api/doctors (search, department filtering, details)
│   ├── appointments.js     # /api/appointments (booking, status transition, queries)
│   ├── patients.js         # /api/patients (enrollment, full profile retrieval)
│   ├── records.js          # /api/records (EHR clinical encounters & prescriptions)
│   ├── triage.js           # /api/triage/analyze (clinical symptom analysis engine)
│   └── stats.js            # /api/stats (metrics & department distribution)
└── public/                 # Responsive Single Page Web Client
    ├── index.html          # HTML5 SPA shell with Tailwind & Lucide icons
    ├── css/
    │   └── style.css       # Custom design system, animations, print rules
    └── js/
        ├── api.js          # REST API communication client
        ├── app.js          # Application state, modals, and routing controller
        └── components/
            ├── dashboard.js       # Operational metrics and Chart.js view
            ├── doctors.js         # Physician directory and scheduling
            ├── appointments.js    # Appointments management queue
            ├── symptomChecker.js  # Smart triage evaluator
            ├── records.js         # EHR and printable prescription view
            ├── patients.js        # Patient registry
            └── renderGuide.js     # In-app interactive Render deployment center
```

---

## 🚀 Quick Start (Local Setup)

### Prerequisites
- Node.js (version 18 or higher recommended)
- Git

### 1. Clone or Open Project
```bash
cd healthcare-platform
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch Development Server
```bash
npm start
```

Open your browser to:
👉 **`http://localhost:5000`**

To check server health:
👉 **`http://localhost:5000/api/health`**

---

## ☁️ Deploy to Render (Free Tier)

PulseCare is pre-configured to deploy on [Render](https://render.com) with zero changes required.

### Method A: One-Click Render Blueprint (Recommended)

1. Push this project to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Deploy PulseCare Platform"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Log in to [dashboard.render.com](https://dashboard.render.com).
3. Click **New +** &rarr; **Blueprint**.
4. Connect your GitHub repository.
5. Render reads `render.yaml` automatically and provisions your Web Service in under 2 minutes!

---

### Method B: Manual Web Service Setup on Render

1. Push your repository to GitHub.
2. In [Render Dashboard](https://dashboard.render.com), click **New +** &rarr; **Web Service**.
3. Select your repository and specify the following parameters:

| Configuration Setting | Recommended Value |
| :--- | :--- |
| **Name** | `pulsecare-healthcare-platform` |
| **Region** | Oregon (US West) or closest to you |
| **Branch** | `main` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Instance Type** | `Free` |
| **Health Check Path** | `/api/health` |

4. Click **Create Web Service**.
5. Once deployment completes, your live application will be accessible at:
   `https://<your-service-name>.onrender.com`

---

## 📡 REST API Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Service uptime and health monitoring |
| `GET` | `/api/stats` | Dashboard KPIs and department counts |
| `GET` | `/api/doctors` | List doctors (supports `?specialty=` and `?search=`) |
| `GET` | `/api/doctors/:id` | Fetch specific doctor profile |
| `GET` | `/api/appointments` | List appointments (supports `?status=` and `?date=`) |
| `POST` | `/api/appointments` | Book a new consultation appointment |
| `PATCH` | `/api/appointments/:id/status` | Update status (`Confirmed`, `Completed`, `Cancelled`) |
| `GET` | `/api/patients` | List registered patients (supports `?search=`) |
| `POST` | `/api/patients` | Enroll a new patient profile |
| `GET` | `/api/patients/:id` | Retrieve patient record with EHR and booking history |
| `GET` | `/api/records` | List EHR clinical encounters (supports `?patientId=`) |
| `POST` | `/api/records` | Add new clinical progress note / EHR record |
| `POST` | `/api/triage/analyze` | Evaluate clinical symptoms & calculate urgency level |

---

## 🛡️ License
Released under the [MIT License](LICENSE).
