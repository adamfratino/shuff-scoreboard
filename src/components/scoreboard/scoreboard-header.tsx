"use client";

import { Button } from "@/components/ui/button";
import { usePlayerStore } from "@/stores/player-store";

export const ScoreboardHeader = () => {
  const setOpen = usePlayerStore((s) => s.setOpen);
  return (
    <div className="grid grid-cols-2 max-w-md sticky top-0 z-10 border-b border-b-black">
      <Button
        onClick={() => setOpen(true)}
        variant="ghost"
        className="text-xs bg-yellow-400 hover:!bg-yellow-400/90 hover:!text-black font-bold rounded-none h-12 uppercase"
      >
        Paul Assad
      </Button>
      <Button
        onClick={() => setOpen(true)}
        variant="ghost"
        className="text-xs bg-black text-white font-bold h-12 uppercase rounded-none"
      >
        Jeff Ziev
      </Button>
    </div>
  );
};
ScoreboardHeader.displayName = "ScoreboardHeader";
