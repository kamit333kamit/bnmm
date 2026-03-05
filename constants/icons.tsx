import { Feather } from "@expo/vector-icons";

export const icon: { [key: string]: (props: any) => React.ReactElement } = {
    tab1: (props: any) => <Feather name="home" size={24} {...props} />,
    tab2: (props: any) => <Feather name="search" size={24} {...props} />,
    tab3: (props: any) => <Feather name="settings" size={24} {...props} />,
}