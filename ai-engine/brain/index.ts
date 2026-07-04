export interface BrainRequest {
  intent: string;
  model: string;
  agent: string;
  memory: boolean;
  stream: boolean;
}

export class RoyalBrain {
  async process(request: BrainRequest) {
    console.log("==================================");
    console.log("👑 ROYAL AI BRAIN");
    console.log("==================================");

    console.log("Intent :", request.intent);
    console.log("Model  :", request.model);
    console.log("Agent  :", request.agent);
    console.log("Memory :", request.memory);
    console.log("Stream :", request.stream);

    return {
      success: true,
      message: "ROYAL Brain Ready",
      request,
    };
  }
}