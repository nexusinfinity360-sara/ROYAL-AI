import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export class GeminiProvider {
  async generate(prompt: string) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      return {
        success: true,
        provider: "Gemini",
        text: response.text,
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        provider: "Gemini",
        text: "Gemini Error",
      };
    }
  }
}

export default GeminiProvider;