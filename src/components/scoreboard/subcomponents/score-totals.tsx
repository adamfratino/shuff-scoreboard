import { useEffect } from "react";

import { useScoreStore } from "@/stores/score-store";
import { useSetScoreStore } from "@/stores/set-score-store";

import { calculateFrameTotalScore } from "@/utils";

export const ScoreTotals = () => {
  const { p1TotalScore, p2TotalScore, setPlayerTotalScore, currentFrame } =
    useSetScoreStore();

  const { player1Score, player2Score } = useScoreStore();

  useEffect(() => {
    if (currentFrame) {
      const p1Frame = Object.entries(player1Score).find(
        (fr) => Number(fr[0]) === currentFrame
      );

      const p2Frame = Object.entries(player2Score).find(
        (fr) => Number(fr[0]) === currentFrame
      );

      if (p1Frame) {
        const frameData = p1Frame[1];
        const frameTotal = calculateFrameTotalScore(frameData);
        setPlayerTotalScore(1, frameTotal);
      } else {
        setPlayerTotalScore(1, 0);
      }

      if (p2Frame) {
        const frameData = p2Frame[1];
        const frameTotal = calculateFrameTotalScore(frameData);
        setPlayerTotalScore(2, frameTotal);
      } else {
        setPlayerTotalScore(2, 0);
      }
    }
  }, [currentFrame, player1Score, player2Score, setPlayerTotalScore]);

  return (
    <div className="grid grid-cols-[4rem_1fr_1fr] items-center mb-1">
      <h5 className="bg-yellow-400 font-bold text-2xl h-10 flex items-center justify-center rounded-l-sm col-start-2">
        {p1TotalScore}
      </h5>
      <h5 className="bg-black text-white font-bold text-2xl h-10 flex items-center justify-center rounded-r-sm">
        {p2TotalScore}
      </h5>
    </div>
  );
};
ScoreTotals.displayName = "ScoreTotals";
