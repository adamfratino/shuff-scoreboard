"use client";

import { PlayerDetailsDialog } from "@/components/player-details/player-details-dialog";
import { Button } from "@/components/ui/button";
import { usePlayersStore } from "@/stores/players-store";
import { cn } from "@/utils";

type ScoreboardHeaderProps = {
  reverse?: boolean;
  className?: string;
};

export const ScoreboardHeader = ({
  reverse,
  className,
}: ScoreboardHeaderProps) => {
  const player1 = usePlayersStore((s) => s.player1);
  const player2 = usePlayersStore((s) => s.player2);

  const players = [player1, player2];

  return (
    <header
      className={cn(
        "flex [&>*]:flex-1 max-w-[var(--board-max-width)] mx-auto top-0 sticky",
        className,
        {
          "flex-row-reverse": reverse,
        }
      )}
    >
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
                {
                  "first:bg-black first:text-white last:bg-yellow-400 last:text-black":
                    reverse,
                },
              ])}
            >
              {player.name}
            </Button>
          }
        />
      ))}
    </header>
  );
};
ScoreboardHeader.displayName = "ScoreboardHeader";
