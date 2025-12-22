import type { Board } from "./boards";
import type { BoardMemberRole } from "./boardMembers";
import type { Profile } from "./profiles";

export interface BoardStore {
  boards: Board[];
  currentBoardId: string | null;
  currentUserRole?: BoardMemberRole;
  setBoards: (boards: Board[]) => void;
  setCurrentBoardId: (id: string | null) => void;
  getBoardById: (id: string) => Board | undefined;
}

export interface UserStore {
  id: string;
  email: string | null;
  profile: Profile | null;
  boardRole: BoardMemberRole | null;
  setUser: (
    id: string,
    email: string | null,
    profile: Profile | null,
    boardRole: BoardMemberRole | null
  ) => void;
  setBoardRole: (role: BoardMemberRole) => void;
  clear: () => void;
}

