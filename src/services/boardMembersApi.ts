import { supabase } from "@/supabaseClient";
import type { BoardMember, BoardMemberRole } from "@/types/boardMembers";

const API_URL = import.meta.env.VITE_API_URL;

export async function getBoardMembers(boardId: string): Promise<BoardMember[]> {
  const { data, error } = await supabase.auth.getSession();

  if (error) throw new Error("failed to get supabase session");

  const accessToken = data.session?.access_token;
  if (!accessToken) throw new Error("User not authenticated");

  const response = await fetch(`${API_URL}/boards/${boardId}/members`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const members: BoardMember[] = await response.json();

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  return members;
}

export const getUserRoleInBoard = async (boardId: string): Promise<BoardMemberRole> => {
  const { data, error } = await supabase.auth.getSession();

  if (error) throw new Error("failed to get supabase session");

  const accessToken = data.session?.access_token;
  if (!accessToken) throw new Error("User not authenticated");

  const response = await fetch(`${API_URL}/boards/${boardId}/members/role`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const role = await response.json();

  console.log("getUserRoleInBoard: ", role)

  return role;
};