export type BoardMemberRole = "admin" | "member" | "viewer";

export interface BoardMember {
  id: string;
  role: BoardMemberRole;
  board_id: string;
  profile: {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    avatar_url?: string | null;
  } | null;
}

