import { Plus, Minus } from "lucide-react";

import { Button } from "@/components/ui/button";

export const ScoreIterator = () => {
  return (
    <div className="flex items-center justify-center space-x-2 max-w-32 p-2 mx-auto w-full">
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 shrink-0 rounded-full"
      >
        <Minus className="stroke-3" />
        <span className="sr-only">Decrease</span>
      </Button>
      <div className="flex-1 text-center">
        <span className="text-3xl font-bold tracking-tighter">0</span>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 shrink-0 rounded-full"
      >
        <Plus className="stroke-3" />
        <span className="sr-only">Increase</span>
      </Button>
    </div>
  );
};
