import GroqProvider from "./providers/groq";

async function main() {
  const ai = new GroqProvider();

  const result = await ai.generate(
    "Introduce yourself in one sentence."
  );

  console.log(result);
}

main();