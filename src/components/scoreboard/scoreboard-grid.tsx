"use client";

import { useScoreboardStore } from "@/stores/scoreboard-store";
import { useScoreStore } from "@/stores/score-store";

import { ScoreboardHeader } from "./scoreboard-header";
import { ScoreboardRow } from "./scoreboard-row";

export const ScoreboardGrid = () => {
  const { frames, getSwitchFrame, switchSides } = useScoreboardStore();
  /** unused but imported to refresh disabled state */
  const { player1Score, player2Score, isFrameScored } = useScoreStore();

  const switchFrame = getSwitchFrame();

  return (
    <main className="min-h-[100dvh]">
      <div className="max-w-md border border-dashed border-gray-700 border-t-0 mx-auto">
        <ScoreboardHeader />
        {[...Array(frames).keys()].map((_, frame) => (
          <ScoreboardRow
            key={frame}
            frame={frame}
            disabled={frame > 0 && !isFrameScored(frame)}
            hasSwitched={switchSides ? frame >= switchFrame! : undefined}
          />
        ))}
      </div>
    </main>
  );
};
ScoreboardGrid.displayName = "ScoreboardGrid";
