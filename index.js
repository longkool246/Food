import Replicate from "replicate";
const replicate = new Replicate();

console.log("Running the model...");
const output = await replicate.run(
  "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
  {
    input: {
      prompt: "a dog chase a cat",
    }
  }
);
console.log(output);