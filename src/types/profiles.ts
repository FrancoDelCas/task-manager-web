export interface Profile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
  email?: string;
  created_at?: string;
  updated_at?: string;
}

export interface UserProfile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string;
}

export interface UpdateProfileInput {
  first_name: string;
  last_name: string;
  avatar_url: string;
}

