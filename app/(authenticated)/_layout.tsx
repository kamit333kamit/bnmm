import { getSubscription } from "@/services/sbase/subscription"
import { useSubscriptionStore } from "@/sm/zustand/subscription"
import { Stack } from "expo-router"
import { useEffect } from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
    const { setSubscriptionData} = useSubscriptionStore((state) => state)
    useEffect(() => {
        const loadSubscriptions = async () => {
            const { data: subscriptions } = await getSubscription()
            if(subscriptions) {
                setSubscriptionData(subscriptions[0])
            }
        }
        loadSubscriptions()
    }
    , [])
    return <Stack/>
}