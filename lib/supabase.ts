import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rukhkymdgvgdpdajgisu.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey as string);

export default supabase;