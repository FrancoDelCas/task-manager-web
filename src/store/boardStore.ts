// src/store/boardStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { BoardStore } from "@/types/stores";

export const useBoardStore = create(
  persist<BoardStore>(
    (set, get) => ({
      boards: [],
      currentBoardId: null,
      setBoards: (boards) => set({ boards }),
      setCurrentBoardId: (id) => set({ currentBoardId: id }),
      getBoardById: (id) => get().boards.find((b) => b.id === id),
    }),
    { name: "boards-storage" }
  )
);