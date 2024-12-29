import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.warn("Missing Gemini API key. Chat functionality will be limited.");
}

export const genAI = new GoogleGenerativeAI(GEMINI_API_KEY || "");

export const getGeminiResponse = async (prompt: string): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const result = await model.generateContent(`You are a medical AI assistant. 
    Provide helpful medical information and guidance while always emphasizing that you're not a replacement for professional medical advice.
    User query: ${prompt}`);
    
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error getting Gemini response:", error);
    throw new Error("Failed to get response from Gemini API");
  }
};