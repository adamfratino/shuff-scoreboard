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

export const ScoreboardDrawer = () => {
  const { open, setOpen } = useDrawerStore();
  const { player1, player2 } = usePlayerStore();

  return (
    <Drawer open={open}>
      <DrawerContent
        onOverlayClick={() => setOpen(false)}
        className="pb-8"
        data-vaul-no-drag
      >
        <DrawerHeader>
          <DrawerTitle>Ready to score your frame?</DrawerTitle>
          <DrawerDescription className="mb-2">
            Tally up your scoring discs and submit 'em here.
          </DrawerDescription>
        </DrawerHeader>
        <div className="w-full max-w-96 mx-auto px-2">
          <div className="grid grid-cols-[4rem_1fr_1fr] items-center mb-1">
            <div aria-hidden="true" />
            <h5 className="bg-yellow-400 font-bold uppercase text-xs py-1 text-center rounded-l-sm">
              {player1?.name}
            </h5>
            <h5 className="bg-black text-white font-bold uppercase text-xs py-1 text-center rounded-r-sm">
              {player2?.name}
            </h5>
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

        <DrawerFooter>
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
