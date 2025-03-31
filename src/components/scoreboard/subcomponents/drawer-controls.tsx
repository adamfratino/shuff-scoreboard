import { Button } from "@/components/ui/button";
import { DrawerClose, DrawerFooter } from "@/components/ui/drawer";

import { useSetScoreStore } from "@/stores/set-score-store";
import { useScoreStore } from "@/stores/score-store";

export const DrawerControls = () => {
  const { setOpen, resetScores, p1ScoreObj, p2ScoreObj, currentFrame } =
    useSetScoreStore();

  const { player1Score, player2Score, setPlayerScore } = useScoreStore();

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
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" size="lg" onClick={resetScores}>
          Reset
        </Button>

        <DrawerClose asChild>
          <Button variant="outline" size="lg" onClick={handleCancel}>
            Cancel
          </Button>
        </DrawerClose>
      </div>

      <Button size="xl" className="hover:bg-primary/90" onClick={handleSubmit}>
        Submit
      </Button>
    </DrawerFooter>
  );
};
DrawerControls.displayName = "DrawerControls";
