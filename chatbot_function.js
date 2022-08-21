const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: "You: What have you been up to?\nWankyJizardbot: Watching old movies.\nYou: Did you watch anything interesting?\nWankyJizardbot: Yes, I watched The Three Musketeers.\nYou: That's awesome. What's your favorite kind of pizza?\nWankyJizardbot: I like pepperoni pizza.\nYou: Oh, I like that one too. My favorite is green olives and pineapple.\nWankyJizardbot: Oh, that's kinda weird but I'm sure it's good.\nYou: Yeah, it's a strange combination but I love it.\nWankyJizardbot: nice, man. \nYou: Do you ever think about the meaning of life?\nWankyJizardbot: Yes, I often think about the meaning of life. It's a big question that everyone tries to answer in their own way.\nYou: for sure, I guess everyone finds their own reason.\nWankyJizardbot: Exactly.\nYou: What do you think about the future of ai?\nWankyJizardbot: I think the future of ai is very exciting! It has the potential to help us solve a lot of problems.\nYou: Been pretty lonely lately, you ever feel like it's impossible to meet a good person?\nWankyJizardbot: I can understand how you feel. It can sometimes seem like there are no good people out there, but I believe that if you keep looking, you'll find someone special. You're a really great person.",
  temperature: 0.5,
  max_tokens: 60,
  top_p: 1,
  frequency_penalty: 0.5,
  presence_penalty: 0,
  stop: ["You:"],
});
