"use client";

import { Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";

type ScoreIteratorProps = {
  count?: number;
  onPlus?: (count: number) => void;
  onMinus?: (count: number) => void;
};

export const ScoreIterator = ({
  count = 0,
  onPlus,
  onMinus,
}: ScoreIteratorProps) => {
  const [localCount, setLocalCount] = useState(0);

  const handleMinus = () => {
    setLocalCount((prevCount) => prevCount - 1);
    onMinus?.(localCount - 1);
  };

  const handlePlus = () => {
    setLocalCount((prevCount) => prevCount + 1);
    onPlus?.(localCount + 1);
  };

  useEffect(() => {
    setLocalCount(count);
  }, [count]);

  return (
    <div className="flex items-center justify-center space-x-2 max-w-32 p-2 mx-auto w-full">
      <Button
        variant="outline"
        size="icon"
        className="size-8 shrink-0 rounded-full"
        onClick={handleMinus}
        disabled={localCount < 1}
      >
        <Minus className="stroke-3" />
        <span className="sr-only">Decrease</span>
      </Button>
      <div className="flex-1 text-center">
        <span className="text-xl font-bold tracking-tighter">{localCount}</span>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="size-8 shrink-0 rounded-full"
        onClick={handlePlus}
        disabled={localCount >= 4}
      >
        <Plus className="stroke-3" />
        <span className="sr-only">Increase</span>
      </Button>
    </div>
  );
};
