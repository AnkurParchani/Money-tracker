import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rukhkymdgvgdpdajgisu.supabase.co";

const supabase = createClient(
  supabaseUrl,
  process.env.NEXT_PUBLIC_SUPABASE_KEY as string
);

export default supabase;
