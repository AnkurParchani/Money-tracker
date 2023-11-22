import { createClient } from "@supabase/supabase-js";

// console.log("Inside the supabase ts");
export const supabaseUrl = "https://rukhkymdgvgdpdajgisu.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey as string);

export default supabase;
