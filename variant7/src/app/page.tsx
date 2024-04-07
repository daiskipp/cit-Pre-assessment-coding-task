"use client";
import { useState, useEffect } from "react";
import MultiplicationRow from "./components/MultiplicationRow";
const API_URL = "http://localhost:3000/api";

export default function Home() {
  const [multiplications, setMultiplications] = useState<any>([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await fetch(`${API_URL}`);
        const multiplications = await res.json();
        setMultiplications(multiplications);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAll();
  }, []);

  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const handleClick = (value: number) => {
    setSelectedValue(selectedValue === value ? null : value);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
    <h1 className="text-4xl">multiplication</h1>
    <div className="w-full max-w-xl mt-5">
      <div className="w-full px-8 py-6 bg-white rounded-lg">
        <table className="border-collapse border border-gray-500">
        {multiplications?.map((multiplication: any, index: number) => (
          <MultiplicationRow key={index} multiplication={multiplication} index={index} selectedValue={selectedValue} handleClick={handleClick} />
        ))}
        </table>
      </div>
    </div>
    </main>
  );
}
