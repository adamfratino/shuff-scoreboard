"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { DrawerClose, DrawerFooter } from "@/components/ui/drawer";

import { useSetScoreStore } from "@/stores/set-score-store";
import { useScoreStore } from "@/stores/score-store";

export const DrawerControls = () => {
  const {
    setOpen,
    resetScores,
    p1ScoreObj,
    p2ScoreObj,
    currentFrame,
    setPlayerScoreObject,
  } = useSetScoreStore();
  const { player1Score, player2Score, setPlayerScore } = useScoreStore();

  useEffect(() => {
    if (currentFrame) {
      const existingP1Frame = player1Score[currentFrame];
      const existingP2Frame = player2Score[currentFrame];

      if (existingP1Frame) setPlayerScoreObject(1, existingP1Frame);
      if (existingP2Frame) setPlayerScoreObject(2, existingP2Frame);
    }
  }, [currentFrame, player1Score, player2Score, setPlayerScoreObject]);

  const handleCancel = () => {
    setOpen(false);
    resetScores();
  };

  const handleSubmit = () => {
    setPlayerScore(1, {
      ...player1Score,
      [currentFrame.toString()]: p1ScoreObj,
    });

    setPlayerScore(2, {
      ...player2Score,
      [currentFrame.toString()]: p2ScoreObj,
    });

    handleCancel();
  };

  return (
    <DrawerFooter className="p-0 pt-1">
      <DrawerClose asChild>
        <Button variant="outline" size="lg" onClick={handleCancel}>
          Cancel
        </Button>
      </DrawerClose>

      <Button size="lg" className="hover:bg-primary/90" onClick={handleSubmit}>
        Submit
      </Button>
    </DrawerFooter>
  );
};
DrawerControls.displayName = "DrawerControls";
