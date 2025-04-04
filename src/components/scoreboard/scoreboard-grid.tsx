"use client";

import { useScoreboardStore } from "@/stores/scoreboard-store";
import { useScoreStore } from "@/stores/score-store";

import { ScoreboardHeader } from "./scoreboard-header";
import { ScoreboardRow } from "./scoreboard-row";

export const ScoreboardGrid = () => {
  const { frames, getSwitchFrame, switchSides } = useScoreboardStore();
  /** unused but imported to refresh disabled state */
  const { player1Score, player2Score, isFrameScored } = useScoreStore();

  const SWITCH_FRAME = getSwitchFrame();

  return (
    <>
      <ScoreboardHeader />
      <main className="max-w-md mx-auto">
        <ul>
          {[...Array(frames).keys()].map((_, frame) => (
            <ScoreboardRow
              key={frame}
              frame={frame}
              disabled={frame > 0 && !isFrameScored(frame)}
              hasSwitched={switchSides ? frame >= SWITCH_FRAME! : undefined}
            />
          ))}
        </ul>
      </main>
    </>
  );
};
ScoreboardGrid.displayName = "ScoreboardGrid";
