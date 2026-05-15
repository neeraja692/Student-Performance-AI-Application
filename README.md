# 🎓 EduNova — AI-Powered Student Performance Dashboard

> Know your strengths. Fix your gaps.

EduNova is an AI-powered academic dashboard that transforms your marks, attendance, and behaviour into clear, actionable insights. It gives students a complete picture of their academic journey and tells them exactly what to do next.

🔗 **Live Demo:** [edunova-ai-fbd4.onrender.com](https://edunova-ai-fbd4.onrender.com/)

---

## ✨ Features

- **Radar Analysis** — Visual subject-by-subject performance chart
- **AI Advisor** — Chat with an AI that knows your data (Gemini 2.5 Flash)
- **Behaviour Score** — Attendance, focus & collaboration combined into one metric
- **Smart Suggestions** — Personalised tips based on your weak spots
- **Marks Breakdown** — Track scores across all subjects at once

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | HTML, CSS, Tailwind CSS, Chart.js |
| Backend | Node.js, Express v5 |
| AI | Google Gemini 2.5 Flash (fallback: Gemini 2.0 Flash) |

---

## 📁 Project Structure

```
edunova-ai/
├── public/
│   ├── coverpage.html     # Landing page
│   └── index.html         # Main dashboard
├── server.js              # Express server + Gemini AI integration
├── package.json
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- A [Google Gemini API key](https://aistudio.google.com/app/apikey)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/neeraja692/Student-Performance-AI-Application.git
cd edunova-ai

# 2. Install dependencies
npm install

# 3. Add your API key
# Create a .env file and add:
GEMINI_API_KEY=your_google_gemini_api_key_here
PORT=3000

# 4. Start the server
npm start
```

Open your browser at `http://localhost:3000`

---

## 🖥️ How It Works

1. **Enter your profile & marks** — Add subject scores, attendance, and behavioural data
2. **Get AI analysis instantly** — EduNova calculates your performance index and renders charts
3. **Act on your insights** — Read personalised suggestions and chat with the AI advisor

---

## 🔒 Privacy

- No sign-up or account required
- No data is stored — all analysis happens per request
- Your data never leaves your session

---

## 📄 License

MIT License — free to use, modify, and distribute.
├── package.json
└── .gitignore                
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- A [Google Gemini API key](https://aistudio.google.com/app/apikey)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/neeraja692/Student-Performance-AI-Application.git
cd edunova-ai

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Add your Gemini API key to .env
```

### Environment Variables

Create a `.gitignore` file in the root directory:

```env
GEMINI_API_KEY=your_google_gemini_api_key_here
PORT=3000
```

### Run the App

```bash
npm start
```

Open your browser at `http://localhost:3000`

---

## 🔌 API Reference

### `POST /chat`

Sends a student query to the Gemini AI advisor.

**Request Body:**
```json
{
  "message": "How can I improve my Physics score?",
  "studentData": {
    "subjects": [
      { "name": "Physics", "marks": 55, "max": 100, "pct": 55 },
      { "name": "Maths",   "marks": 82, "max": 100, "pct": 82 }
    ],
    "attendance": 85,
    "focus": 7
  }
}
```

**Response:**
```json
{
  "reply": "Your Physics score of 55% suggests gaps in core concepts...",
  "analysis": {
    "finalScore": 68,
    "bestSubject": "Maths",
    "weakSubject": "Physics"
  }
}
```

### `GET /health`

Returns server status.

```json
{ "status": "ok", "message": "EduNova AI running" }
```

---

## 🤖 AI Model Details

EduNova uses a primary/fallback model strategy to ensure reliability:

- **Primary:** `gemini-2.5-flash` — fast, accurate, low cost
- **Fallback:** `gemini-2.0-flash` — automatically used if the primary model fails

The AI receives full student context (subjects, scores, attendance, focus) with every request, and responds with concise, practical academic advice (max 5 lines).

---

## 🖥️ How It Works

1. **Enter your profile & marks** — Add your subject scores, attendance, and behavioural data
2. **Get AI analysis instantly** — EduNova calculates your performance index and renders radar/bar charts
3. **Act on your insights** — Read personalised suggestions and chat with the AI advisor

---

## 📦 Dependencies

```json
{
  "express": "^5.2.1",
  "cors": "^2.8.6",
  "dotenv": "^16.4.5",
  "@google/generative-ai": "^0.21.0"
}
```

---

## 🔒 Privacy

- No user accounts or sign-ups required
- No data is stored on the server — all analysis happens per request
- Your marks and personal data never leave your session

---

## 📄 License

MIT License — free to use, modify, and distribute.

---


