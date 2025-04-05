import NumberFlow from "@number-flow/react";

import { useScoreStore } from "@/stores/score-store";
import { usePlayersStore } from "@/stores/players-store";
import { calculateMatchTotalScore } from "@/utils";

export const SubmitMatchTotal = () => {
  const player1 = usePlayersStore((s) => s.player1);
  const player2 = usePlayersStore((s) => s.player2);

  const player1Score = useScoreStore((s) => s.player1Score);
  const player2Score = useScoreStore((s) => s.player2Score);

  const PLAYER_1_SCORE = calculateMatchTotalScore(player1Score);
  const PLAYER_2_SCORE = calculateMatchTotalScore(player2Score);

  return (
    <div className="flex [&>*]:flex-1 border-2 border-black rounded-md gap-0.5 bg-black overflow-hidden">
      <div className="flex flex-col gap-1 items-center bg-white">
        <span className="text-sm font-semibold bg-black py-1 w-full text-white text-center">
          {player1.name}
        </span>
        <NumberFlow value={PLAYER_1_SCORE} className="text-4xl font-bold" />
      </div>

      <div className="flex flex-col gap-1 items-center bg-white">
        <span className="text-sm font-semibold bg-black py-1 w-full text-white text-center">
          {player2.name}
        </span>
        <NumberFlow value={PLAYER_2_SCORE} className="text-4xl font-bold" />
      </div>
    </div>
  );
};
SubmitMatchTotal.displayName = "SubmitMatchTotal";
