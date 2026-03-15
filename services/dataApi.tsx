import { supabase } from "@/lib/supabase"

export const getShops = async () => {
  const { data, error } = await supabase.from('shops').select('*')

  if (error) {
    console.error('Error fetching data:', error)
    return null
  }

  return { data, error }
}