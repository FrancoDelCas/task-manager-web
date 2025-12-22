import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserStore } from "@/types/stores";

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      id: '',
      email: null,
      profile: null,
      boardRole: null,

      setUser: (id, email, profile, boardRole) =>
        set({ id, email, profile, boardRole }),

      setBoardRole: (boardRole) => set({ boardRole }),
      clear: () => set({ id: '', email: null, profile: null, boardRole: null }),
    }),
    { name: "user-storage" }
  )
);