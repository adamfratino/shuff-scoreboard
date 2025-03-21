import { create } from "zustand";

export interface DrawerState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useDrawerStore = create<DrawerState>()((set) => ({
  open: false,
  setOpen: (open) => set({ open: open }),
}));
