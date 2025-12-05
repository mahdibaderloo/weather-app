import { create } from "zustand";

interface ModalState {
  isOpen: true | false;
  setOpen: () => void;
  setClose: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  isOpen: false,
  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
}));
