"use client";

import { useState } from "react";

import { PLAYERS } from "@/MOCK_DATA";

import { PlayerDetailsDialog } from "@/components/player-details/player-details-dialog";

import { Button } from "@/components/ui/button";

export const ScoreboardHeader = () => {
  const [activePlayerDetails, setActivePlayerDetails] = useState(PLAYERS[0]);

  return (
    <div className="grid grid-cols-2 max-w-md sticky top-0 z-10 border-b border-b-black">
      {PLAYERS.map((player) => (
        <PlayerDetailsDialog
          key={player.id}
          {...player}
          trigger={
            <Button
              variant="ghost"
              className="text-xs first:bg-yellow-400 first:hover:!bg-yellow-400/90 first:hover:!text-black bg-black last:text-white font-bold rounded-none h-12"
            >
              {player.name}
            </Button>
          }
        />
      ))}
    </div>
  );
};
ScoreboardHeader.displayName = "ScoreboardHeader";
