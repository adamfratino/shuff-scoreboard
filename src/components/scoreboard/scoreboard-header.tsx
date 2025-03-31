"use client";

import { cn } from "@/utils";

import { PlayerDetailsDialog } from "@/components/player-details/player-details-dialog";
import { usePlayersStore } from "@/stores/players-store";

import { Button } from "@/components/ui/button";

export const ScoreboardHeader = () => {
  const player1 = usePlayersStore((s) => s.player1);
  const player2 = usePlayersStore((s) => s.player2);

  const players = [player1, player2];

  return (
    <div className="grid grid-cols-2 max-w-md top-0 sticky">
      {players.map((player) => (
        <PlayerDetailsDialog
          key={player.id}
          {...player}
          trigger={
            <Button
              variant="ghost"
              className={cn([
                "text-xs font-bold rounded-none h-10",
                "first:bg-yellow-400 first:hover:!bg-yellow-400/90 first:hover:!text-black",
                "last:bg-black last:text-white last:hover:bg-black/90",
              ])}
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
