import { create } from "zustand";

interface ModalState {
  isOpen: true | false;
  setIsOpen: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  isOpen: false,
  setIsOpen: () =>
    set((state) => ({ isOpen: state.isOpen === false ? true : false })),
}));
