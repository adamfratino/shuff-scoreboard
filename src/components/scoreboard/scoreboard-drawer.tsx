"use client";

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
import { usePlayerStore } from "@/stores/player-store";

import { ScoreIterator } from "./subcomponents/score-iterator";
import { RangeSlider } from "./subcomponents/range-slider";
import { ScoreSwitch } from "./subcomponents/score-switch";

export const ScoreboardDrawer = () => {
  const { open, setOpen } = useDrawerStore();
  const { player1, player2 } = usePlayerStore();

  return (
    <Drawer open={open}>
      <DrawerContent
        onOverlayClick={() => setOpen(false)}
        className="p-8 pt-4"
        data-vaul-no-drag
      >
        <DrawerHeader className="px-0">
          <DrawerTitle>Ready to score your frame?</DrawerTitle>
          <DrawerDescription className="sr-only">
            Tally up your scoring discs and submit 'em here.
          </DrawerDescription>
        </DrawerHeader>

        <div className="w-full mx-auto pb-4">
          <div className="grid grid-cols-[4rem_1fr_1fr] items-center mb-1">
            <h5 className="bg-yellow-400 font-bold text-xs h-8 flex items-center justify-center rounded-l-sm col-start-2">
              {player1?.name}
            </h5>
            <h5 className="bg-black text-white font-bold text-xs h-8 flex items-center justify-center rounded-r-sm">
              {player2?.name}
            </h5>
            <div className="col-span-2 col-start-2">
              <ScoreSwitch
                labels={{ on: "Simple", off: "Detailed" }}
                className="w-full mt-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-[4rem_1fr_1fr] items-center">
            <span className="text-sm font-bold uppercase after:content-[':'] text-right">
              Ten
            </span>
            <ScoreIterator />
            <ScoreIterator />
          </div>
          <div className="grid grid-cols-[4rem_1fr_1fr] items-center">
            <span className="text-sm font-bold uppercase after:content-[':'] text-right">
              Eight
            </span>
            <ScoreIterator />
            <ScoreIterator />
          </div>
          <div className="grid grid-cols-[4rem_1fr_1fr] items-center">
            <span className="text-sm font-bold uppercase after:content-[':'] text-right">
              Seven
            </span>
            <ScoreIterator />
            <ScoreIterator />
          </div>
          <div className="grid grid-cols-[4rem_1fr_1fr] items-center">
            <span className="text-sm font-bold uppercase after:content-[':'] text-right">
              Ten Off
            </span>
            <ScoreIterator />
            <ScoreIterator />
          </div>
        </div>

        <RangeSlider label="How fast was the court?" max={10} />

        <DrawerFooter className="p-0 pt-8">
          <Button size="lg" className="hover:bg-primary/90">
            Submit
          </Button>
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
