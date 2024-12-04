import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const data: { body: string } = await req.json();
    const prompt = data.body;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const output = response.text();

    return NextResponse.json({ output });
  } catch (error) {
    console.error(error);
  }
}
