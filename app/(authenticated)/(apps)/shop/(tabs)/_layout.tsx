import { TabBar } from "@/components/TabBar"
import { Tabs } from "expo-router"

export default function Layout({ children }: { children: React.ReactNode }) {
    return <Tabs tabBar={props => <TabBar {...props} />} >
        <Tabs.Screen name="tab1" options={{ headerShown: false }} />
        <Tabs.Screen name="tab2" options={{ headerShown: false }} />
        <Tabs.Screen name="tab3" options={{ headerShown: false }} />
    </Tabs>
}

