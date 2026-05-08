const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "coverpage.html"));
});

//  Serve frontend (public/index.html)
app.use(express.static(path.join(__dirname, "public")));
// GEMINI SETUP
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 🔥 Primary + fallback models
const primaryModel = genAI.getGenerativeModel({
  model: "gemini-2.5-flash"
});

const fallbackModel = genAI.getGenerativeModel({
  model: "gemini-2.0-flash"
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "EduNova AI running"
  });
});
// CHAT ENDPOINT

app.post("/chat", async (req, res) => {
  try {
    const { message, studentData } = req.body;

    // ❌ Validate input
    if (!studentData || !studentData.subjects || !studentData.subjects.length) {
      return res.json({
        reply: "Please enter your marks in the dashboard first."
      });
    }

    const subjects = studentData.subjects;
    const attendance = studentData.attendance || 80;
    const focus = studentData.focus || 5;

    // ───── ANALYSIS ─────
    const avg =
      subjects.reduce((sum, s) => sum + s.pct, 0) / subjects.length;

    const sorted = [...subjects].sort((a, b) => b.pct - a.pct);
    const best = sorted[0];
    const weak = sorted[sorted.length - 1];

    const finalScore = Math.round(avg);

    // ───── PROMPT ─────
    const prompt = `
You are EduNova AI, a smart academic mentor.

STUDENT ANALYSIS:
- Overall Score: ${finalScore}%
- Best Subject: ${best.name} (${best.pct}%)
- Weak Subject: ${weak.name} (${weak.pct}%)
- Attendance: ${attendance}%
- Focus Level: ${focus}/10

SUBJECT LIST:
${subjects.map(s => `${s.name}: ${s.pct}%`).join("\n")}

USER QUESTION:
${message}

RULES:
- Max 5 lines
- Simple, practical advice
- Focus on improvement
- Be clear, not robotic
`;

    let response;

    // ───── TRY PRIMARY MODEL ─────
    try {
      const result = await primaryModel.generateContent(prompt);
      response = await result.response;
    } catch (err) {
      console.log("⚠️ Primary model failed, switching to fallback...");
      const result = await fallbackModel.generateContent(prompt);
      response = await result.response;
    }

    // ───── SEND RESPONSE ─────
    return res.json({
      reply: response.text(),
      analysis: {
        finalScore,
        bestSubject: best.name,
        weakSubject: weak.name
      }
    });

  } catch (error) {
    console.error("❌ Server Error:", error);

    return res.status(500).json({
      reply: "AI server error. Try again in a moment."
    });
  }
});

// ─────────────────────────────
// START SERVER
// ─────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 EduNova running at http://localhost:${PORT}`);
});
