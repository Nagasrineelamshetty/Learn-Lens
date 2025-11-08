// test.js
import fetch from "node-fetch";

const API_KEY = "API_KEY"; // 🔑 replace with your valid key

async function testGemini() {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: "Hello Gemini, can you generate a short quiz question about AI?" }],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error calling Gemini API:", error);
  }
}

testGemini();
