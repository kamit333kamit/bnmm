import { supabase } from "@/lib/supabase"

export const getSubscription = async () => {
  const { data, error } = await supabase.from('subscriptions').select('*')

  if (error) {
    console.error('Error fetching data:', error)
    return null
  }

  return { data, error }
}