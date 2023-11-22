import { createClient } from "@supabase/supabase-js";

console.log(process.env.SUPBASE_KEY);

export const supabaseUrl = "https://rukhkymdgvgdpdajgisu.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey as string);

export default supabase;
