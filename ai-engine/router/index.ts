export interface RouterRequest {
  provider: string;
  prompt: string;
}

export class RoyalRouter {
  async route(request: RouterRequest) {
    console.log("==================================");
    console.log("👑 ROYAL AI ROUTER");
    console.log("==================================");

    console.log("Provider :", request.provider);
    console.log("Prompt   :", request.prompt);

    switch (request.provider.toLowerCase()) {
      case "gemini":
        return "Gemini Provider Selected";

      case "claude":
        return "Claude Provider Selected";

      case "openai":
        return "OpenAI Provider Selected";

      default:
        return "Unknown Provider";
    }
  }
}

export default RoyalRouter;