import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_API_KEY });
const model = ai.models.getModel("gemini-2.0-flash");

async function generateContent(prompt) {
  const result = await model.generateContent();
    return result.response.text
}

export default {
  generateContent,
};