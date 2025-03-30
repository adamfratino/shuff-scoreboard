"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { usePlayerStore } from "@/stores/players-store";

export const PlayerDialog = () => {
  const open = usePlayerStore((s) => s.open);
  const setOpen = usePlayerStore((s) => s.setOpen);

  return (
    <Dialog open={open}>
      <DialogContent onClose={() => setOpen(false)}>
        <DialogHeader>
          <DialogTitle>Who's playing the match?</DialogTitle>
          <DialogDescription>
            Provide some details about the players playing.
          </DialogDescription>
        </DialogHeader>
        <Input className="w-full" placeholder="Player 1" />
        <Input className="w-full" placeholder="Player 2" />
        <Button size="lg" className="hover:bg-primary/90">
          Submit
        </Button>
        <DialogClose asChild>
          <Button size="lg" variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
PlayerDialog.displayName = "PlayerDialog";
