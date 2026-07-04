import Groq from "groq-sdk";
import * as dotenv from "dotenv";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default class GroqProvider {
  async generate(prompt: string) {
    try {
      const completion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 4096,
      });

      return {
        success: true,
        provider: "Groq",
        text: completion.choices[0]?.message?.content ?? "",
      };
    } catch (error) {
      console.error("Groq Error:", error);

      return {
        success: false,
        provider: "Groq",
        text: "Groq API Error",
      };
    }
  }
}