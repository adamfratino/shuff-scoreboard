"use client";

import { Hammer } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { useDrawerStore } from "@/stores/drawer-store";
import { useSetScoreStore } from "@/stores/set-score-store";

export type ScoreboardCellProps = {
  position: 0 | 1;
  hammer?: boolean;
  frame: number;
};

export const ScoreboardCell = ({
  hammer,
  position,
  frame,
}: ScoreboardCellProps) => {
  const setOpen = useDrawerStore((s) => s.setOpen);
  const setFrame = useSetScoreStore((s) => s.setCurrentFrame);

  const handleClick = () => {
    setFrame(frame);
    setOpen(true);
  };

  return (
    <div className="relative aspect-video bg-black text-white even:border-r even:border-dashed even:border-gray-700">
      <Button
        onClick={handleClick}
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
