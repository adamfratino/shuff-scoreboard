"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

type ScoreIteratorProps = {
  onPlus?: (count: number) => void;
  onMinus?: (count: number) => void;
};

export const ScoreIterator = ({ onPlus, onMinus }: ScoreIteratorProps) => {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    setCount((prevCount) => prevCount - 1);
    onMinus?.(count - 1);
  };

  const handlePlus = () => {
    setCount((prevCount) => prevCount + 1);
    onPlus?.(count + 1);
  };

  return (
    <div className="flex items-center justify-center space-x-2 max-w-32 p-2 mx-auto w-full">
      <Button
        variant="outline"
        size="icon"
        className="size-8 shrink-0 rounded-full"
        onClick={handleMinus}
        disabled={count < 1}
      >
        <Minus className="stroke-3" />
        <span className="sr-only">Decrease</span>
      </Button>
      <div className="flex-1 text-center">
        <span className="text-3xl font-bold tracking-tighter">{count}</span>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="size-8 shrink-0 rounded-full"
        onClick={handlePlus}
        disabled={count >= 4}
      >
        <Plus className="stroke-3" />
        <span className="sr-only">Increase</span>
      </Button>
    </div>
  );
};
