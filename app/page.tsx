"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const generateText = async () => {
    const prompt = `Write a short humorous and sarcastic historical joke about: ${input}`;
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ body: prompt }),
      });

      const data = await response.json();

      if (response.ok) {
        setOutput(data.output);
      } else {
        setOutput(data.error || "An error occurred.");
      }
    } catch (error) {
      console.error("Error:", error);
      setOutput("An error occurred while generating the text.");
    }
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen gap-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter any historical topic"
        className="border border-zinc-400 w-[330px] px-4 py-4 rounded-md placeholder-slate-400 text-black focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:ring-pink-500"
      />
      <button
        onClick={generateText}
        className="px-4 py-2 rounded-md hover:scale-105 transition-all ease-in-out bg-sky-500 text-white"
      >
        Generate Joke
      </button>
      {output && (
        <div className="max-w-[450px] h-auto p-4 rounded-md shadow-md border-zinc-400 bg-green-800 text-white">
          {output}
        </div>
      )}
    </main>
  );
}
