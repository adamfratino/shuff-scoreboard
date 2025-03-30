"use client";

import { DEFAULT_PLAYER_SCORE, SCORE_PLAINTEXT } from "@/constants";
import type { ScorePlaintext } from "@/types";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import { useDrawerStore } from "@/stores/drawer-store";
import { usePlayersStore } from "@/stores/players-store";
import { useScoreStore } from "@/stores/score-store";
import { useSetScoreStore } from "@/stores/set-score-store";

import { ScoreIterator } from "./subcomponents/score-iterator";
// import { ScoreSwitch } from "./subcomponents/score-switch";
// import { RangeSlider } from "./subcomponents/range-slider";

export const ScoreboardDrawer = () => {
  const { open, setOpen } = useDrawerStore();
  const { player1, player2 } = usePlayersStore();

  const {
    currentFrame,
    p1ScoreObj,
    p2ScoreObj,
    p1TotalScore,
    p2TotalScore,
    setPlayerScoreObject,
  } = useSetScoreStore();

  const handleIterate = (player: 1 | 2, score: { [score: number]: number }) => {
    const details = player === 1 ? p1ScoreObj : p2ScoreObj;
    setPlayerScoreObject(player, { ...details, ...score });
  };

  return (
    <Drawer open={open}>
      <DrawerContent
        onOverlayClick={() => setOpen(false)}
        className="p-4 pb-8"
        data-vaul-no-drag
      >
        <DrawerHeader className="px-0">
          <DrawerTitle>
            Ready to score frame {currentFrame}? ({p1TotalScore} -{" "}
            {p2TotalScore})
          </DrawerTitle>
          <DrawerDescription className="sr-only">
            Tally up your scoring discs and submit 'em here.
          </DrawerDescription>
        </DrawerHeader>

        <div className="w-full mx-auto pb-4">
          <div className="grid grid-cols-[4rem_1fr_1fr] items-center mb-1 mx-2">
            <h5 className="bg-yellow-400 font-bold text-xs h-8 flex items-center justify-center rounded-l-sm col-start-2">
              {player1.name}
            </h5>
            <h5 className="bg-black text-white font-bold text-xs h-8 flex items-center justify-center rounded-r-sm">
              {player2.name}
            </h5>

            {/* <div className="col-span-2 col-start-2">
              <ScoreSwitch
                labels={{ on: "Simple", off: "Detailed" }}
                className="w-full mt-2"
              />
            </div> */}
          </div>

          {[...Object.entries(DEFAULT_PLAYER_SCORE)]
            .sort((a, b) => {
              const order = ["10", "8", "7", "-10"];
              return order.indexOf(a[0]) - order.indexOf(b[0]);
            })
            .map(([name]) => (
              <div
                key={name}
                className="grid grid-cols-[4rem_1fr_1fr] items-center"
              >
                <span className="text-sm font-bold uppercase after:content-[':'] text-right">
                  {SCORE_PLAINTEXT[name as keyof ScorePlaintext]}
                </span>
                <ScoreIterator
                  onPlus={(count) => handleIterate(1, { [name]: count })}
                  onMinus={(count) => handleIterate(1, { [name]: count })}
                />
                <ScoreIterator
                  onPlus={(count) => handleIterate(2, { [name]: count })}
                  onMinus={(count) => handleIterate(2, { [name]: count })}
                />
              </div>
            ))}
        </div>

        {/* <RangeSlider label="How fast was the court?" max={10} /> */}

        <DrawerFooter className="p-0 pt-2">
          <Button size="lg" className="hover:bg-primary/90">
            Submit
          </Button>
          {/* <Button variant="outline" size="lg" onClick={handleReset}>
            Reset
          </Button> */}
          <DrawerClose asChild>
            <Button variant="outline" size="lg" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
ScoreboardDrawer.displayName = "ScoreboardDrawer";
