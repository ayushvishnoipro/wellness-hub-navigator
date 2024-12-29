import { GoogleGenerativeAI } from "@google/generative-ai";
import { supabase } from "@/integrations/supabase/client";

const getGeminiKey = async () => {
  const { data: { GEMINI_API_KEY } } = await supabase.functions.invoke('get-gemini-key');
  if (!GEMINI_API_KEY) {
    throw new Error("Missing Gemini API key");
  }
  return GEMINI_API_KEY;
};

let genAI: GoogleGenerativeAI;

export const initializeGemini = async () => {
  const apiKey = await getGeminiKey();
  genAI = new GoogleGenerativeAI(apiKey);
};

export const getGeminiResponse = async (prompt: string): Promise<string> => {
  try {
    if (!genAI) {
      await initializeGemini();
    }
    
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