export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      achievements: {
        Row: {
          claimed: boolean | null
          created_at: string | null
          description: string
          icon: string | null
          id: string
          progress: number | null
          title: string
          user_id: string
        }
        Insert: {
          claimed?: boolean | null
          created_at?: string | null
          description: string
          icon?: string | null
          id?: string
          progress?: number | null
          title: string
          user_id: string
        }
        Update: {
          claimed?: boolean | null
          created_at?: string | null
          description?: string
          icon?: string | null
          id?: string
          progress?: number | null
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      answers: {
        Row: {
          content: string
          created_at: string | null
          id: string
          question_id: string
          updated_at: string | null
          user_id: string
          votes: number | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          question_id: string
          updated_at?: string | null
          user_id: string
          votes?: number | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          question_id?: string
          updated_at?: string | null
          user_id?: string
          votes?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "answers_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
        ]
      }
      hostel_reviews: {
        Row: {
          comment: string
          created_at: string | null
          hostel_id: string
          id: string
          images: string[] | null
          rating: number | null
          user_id: string
        }
        Insert: {
          comment: string
          created_at?: string | null
          hostel_id: string
          id?: string
          images?: string[] | null
          rating?: number | null
          user_id: string
        }
        Update: {
          comment?: string
          created_at?: string | null
          hostel_id?: string
          id?: string
          images?: string[] | null
          rating?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "hostel_reviews_hostel_id_fkey"
            columns: ["hostel_id"]
            isOneToOne: false
            referencedRelation: "hostels"
            referencedColumns: ["id"]
          },
        ]
      }
      hostels: {
        Row: {
          amenities: string[] | null
          created_at: string | null
          description: string | null
          distance: string | null
          id: string
          images: string[] | null
          name: string
          price: string | null
          rating: number | null
        }
        Insert: {
          amenities?: string[] | null
          created_at?: string | null
          description?: string | null
          distance?: string | null
          id?: string
          images?: string[] | null
          name: string
          price?: string | null
          rating?: number | null
        }
        Update: {
          amenities?: string[] | null
          created_at?: string | null
          description?: string | null
          distance?: string | null
          id?: string
          images?: string[] | null
          name?: string
          price?: string | null
          rating?: number | null
        }
        Relationships: []
      }
      marketplace_items: {
        Row: {
          category: string | null
          condition: string | null
          created_at: string | null
          description: string
          id: string
          images: string[] | null
          price: number
          title: string
          user_id: string
        }
        Insert: {
          category?: string | null
          condition?: string | null
          created_at?: string | null
          description: string
          id?: string
          images?: string[] | null
          price: number
          title: string
          user_id: string
        }
        Update: {
          category?: string | null
          condition?: string | null
          created_at?: string | null
          description?: string
          id?: string
          images?: string[] | null
          price?: number
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          college: string | null
          created_at: string | null
          email: string | null
          id: string
          interests: string | null
          name: string
          phone_no: string | null
          roll_no: string | null
          updated_at: string | null
          year: string | null
        }
        Insert: {
          avatar_url?: string | null
          college?: string | null
          created_at?: string | null
          email?: string | null
          id: string
          interests?: string | null
          name: string
          phone_no?: string | null
          roll_no?: string | null
          updated_at?: string | null
          year?: string | null
        }
        Update: {
          avatar_url?: string | null
          college?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          interests?: string | null
          name?: string
          phone_no?: string | null
          roll_no?: string | null
          updated_at?: string | null
          year?: string | null
        }
        Relationships: []
      }
      questions: {
        Row: {
          created_at: string | null
          description: string
          id: string
          tags: string[] | null
          title: string
          updated_at: string | null
          user_id: string
          votes: number | null
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          tags?: string[] | null
          title: string
          updated_at?: string | null
          user_id: string
          votes?: number | null
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          tags?: string[] | null
          title?: string
          updated_at?: string | null
          user_id?: string
          votes?: number | null
        }
        Relationships: []
      }
      resources: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          rating: number | null
          tags: string[] | null
          thumbnail_url: string | null
          title: string
          type: string
          url: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          rating?: number | null
          tags?: string[] | null
          thumbnail_url?: string | null
          title: string
          type: string
          url: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          rating?: number | null
          tags?: string[] | null
          thumbnail_url?: string | null
          title?: string
          type?: string
          url?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
