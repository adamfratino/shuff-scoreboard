"use client";

import { usePlayersStore } from "@/stores/players-store";

export const SubmitMatchNames = () => {
  const player1 = usePlayersStore((s) => s.player1);
  const player2 = usePlayersStore((s) => s.player2);

  return (
    <div className="flex [&>*]:flex-1 gap-px">
      <span className="text-sm font-semibold bg-black py-1 w-full text-white text-center">
        {player1.name}
      </span>

      <span className="text-sm font-semibold bg-black py-1 w-full text-white text-center">
        {player2.name}
      </span>
    </div>
  );
};
SubmitMatchNames.displayName = "SubmitMatchNames";
