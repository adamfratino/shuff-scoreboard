"use client";

import { Hammer } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDrawerStore } from "@/stores/drawer-store";

export type ScoreboardCellProps = {
  position: 0 | 1;
  hammer?: boolean;
};

export const ScoreboardCell = ({ hammer, position }: ScoreboardCellProps) => {
  const { open, setOpen } = useDrawerStore();

  return (
    <div className="relative aspect-video bg-black text-white even:border-r even:border-dashed even:border-gray-700">
      <Button
        onClick={() => setOpen(!open)}
        className="h-full text-white text-center text-3xl font-extrabold rounded-none border-0 bg-transparent flex items-center justify-center w-full"
      >
        -
      </Button>
      {hammer && (
        <Hammer
          size={16}
          className={cn("absolute stroke-white bottom-2 left-2", {
            "left-auto right-2": position === 1,
          })}
        />
      )}
    </div>
  );
};
ScoreboardCell.displayName = "ScoreboardCell";
