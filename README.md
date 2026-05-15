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


