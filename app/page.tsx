"use client";
import GenerateBtn from "@/components/GenerateBtn";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const generateText = async () => {
    if (!input.trim()) {
      toast.error("Please enter a historical topic!");
      return;
    }
    setLoading(true);
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
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col justify-center items-center h-[90vh] gap-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter any historical topic"
        className="border border-gray-400 w-[330px] px-4 py-4 rounded-md placeholder-slate-400 text-black focus:outline-none focus:border-none focus:ring-2 focus:ring-gray-400 "
      />
      <GenerateBtn
        text="Generate Joke"
        onclick={generateText}
        loading={loading}
      />
      {output && (
        <div className="max-w-[450px] h-auto p-4 rounded-md shadow-md border border-gray-400 bg-zinc-100 text-black text-center">
          {output}
        </div>
      )}
    </main>
  );
}
