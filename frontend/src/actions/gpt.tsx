"use server";

import { ChatGPTAPI } from "chatgpt";

const api = new ChatGPTAPI({
  // @ts-ignore
  apiKey: process.env.OPENAI_API_KEY,
});

export async function send(prompt: string): Promise<string> {
  const res = await api.sendMessage(prompt);
  return res.text;
}
