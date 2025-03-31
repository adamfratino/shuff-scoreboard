"use client";

import NumberFlow from "@number-flow/react";
import { Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";

type ScoreIteratorProps = {
  initialValue?: number;
  onPlus?: (count: number) => void;
  onMinus?: (count: number) => void;
};

export const ScoreIterator = ({
  initialValue = 0,
  onPlus,
  onMinus,
}: ScoreIteratorProps) => {
  const [count, setCount] = useState(initialValue);

  const handleMinus = () => {
    const newValue = count - 1;

    setCount(newValue);
    onMinus?.(newValue);
  };

  const handlePlus = () => {
    const newValue = count + 1;

    setCount(newValue);
    onPlus?.(newValue);
  };

  useEffect(() => {
    setCount(count);
  }, [count]);

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
        <NumberFlow
          value={count}
          className="text-xl font-bold tracking-tighter"
        />
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
