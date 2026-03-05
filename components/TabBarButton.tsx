import { icon } from "@/constants/icons";
import React from 'react';
import { Pressable, StyleSheet, Text } from "react-native";

const TabBarButton = ({ routeName, isFocused, onPress, onLongPress, color, label }: { routeName: string, isFocused: boolean, onPress: () => void, onLongPress: () => void, color: string, label: string }) => {
    return (
        <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
        >
            {icon[routeName]({ color: isFocused ? '#673ab7' : '#222' })}
            <Text style={[styles.label, { color: isFocused ? '#673ab7' : '#222' }]}>
                {label.toString()}
            </Text>
        </Pressable>
    );
}

export default TabBarButton;

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        gap: 4,
    },
    label: {
        fontSize: 12,
        marginTop: 4,
    },
});
