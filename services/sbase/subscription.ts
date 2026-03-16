import { supabase } from "@/lib/supabase"

export const getSubscription = async () => {
  const { data, error } = await supabase.from('subscriptions').select('*')


  return { data, error }
}