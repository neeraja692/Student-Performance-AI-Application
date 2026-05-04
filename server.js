const express = require("express");

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());
app.use(express.static("public"));

// 🔑 YOUR API KEY HERE
const API_KEY = "AIzaSyCzHEFlkvdufqd9-ECz8YkVmLcxRiumNhg";

// chat endpoint
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: userMessage
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    console.log("GEMINI RESPONSE:", JSON.stringify(data, null, 2));

    // safe reply extraction
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      data?.error?.message ||
      "No response from AI";

    res.json({ reply });

  } catch (error) {
    console.error("Server Error:", error);
    res.json({ reply: "Server error occurred" });
  }
});

// serve frontend
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});