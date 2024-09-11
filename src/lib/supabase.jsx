import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://xetshontaapiyejwnjaj.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhldHNob250YWFwaXllanduamFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwMjMwNTYsImV4cCI6MjA0MTU5OTA1Nn0.Spz6AxC_HJXkuwVagJEZH83a7eNP9Kv8hrA5OU-9CCI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
