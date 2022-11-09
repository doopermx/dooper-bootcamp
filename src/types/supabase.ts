export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          name: string;
          lastname: string;
          email: string;
          phone_number: string;
          city: string | null;
          state: string | null;
          country: string | null;
          photo_url: string | null;
        };
        Insert: {
          id: string;
          name?: string;
          lastname?: string;
          email?: string;
          phone_number?: string;
          city?: string | null;
          state?: string | null;
          country?: string | null;
          photo_url?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          lastname?: string;
          email?: string;
          phone_number?: string;
          city?: string | null;
          state?: string | null;
          country?: string | null;
          photo_url?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
