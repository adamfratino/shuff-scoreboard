"use client";

import { useScoreboardStore } from "@/stores/scoreboard-store";
import { useScoreStore } from "@/stores/score-store";

import { ScoreboardHeader } from "./scoreboard-header";
import { ScoreboardRow } from "./scoreboard-row";
import { ScoreboardFooter } from "./scoreboard-footer";

export const ScoreboardGrid = () => {
  const { frames, getSwitchFrame, switchSides } = useScoreboardStore();
  /** unused but imported to refresh disabled state */
  const { player1Score, player2Score, isFrameScored } = useScoreStore();

  const SWITCH_FRAME = getSwitchFrame();

  return (
    <>
      <ScoreboardHeader />
      {/** must be positioned above grid to stack under it  */}
      <ScoreboardFooter />
      <main className="max-w-md mx-auto pb-[var(--footer-height)]">
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
