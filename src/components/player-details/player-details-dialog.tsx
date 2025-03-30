"use client";

import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Player } from "@/types";

type DialogProps = React.ComponentProps<typeof Dialog>;

type PlayerDetailsDialogProps = Player & {
  trigger: React.ReactNode;
};

export const PlayerDetailsDialog = ({
  name,
  location,
  age,
  gender,
  wins,
  losses,
  rank,
  trigger,
}: PlayerDetailsDialogProps) => {
  const stats = { rank, wins, losses };
  const profile = { location, age, gender };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription className="sr-only">
            Player profile
          </DialogDescription>
        </DialogHeader>

        <ul>
          {Object.entries(stats).map(([key, value]) => (
            <li key={key}>
              <strong className="uppercase">{key}:</strong> {value}
            </li>
          ))}
        </ul>

        <ul>
          {Object.entries(profile).map(([key, value]) => {
            if (!value) return;

            return (
              <li key={key}>
                <strong className="uppercase">{key}:</strong> {value}
              </li>
            );
          })}
        </ul>
      </DialogContent>
    </Dialog>
  );
};
PlayerDetailsDialog.displayName = "PlayerDetailsDialog";
