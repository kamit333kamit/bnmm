import TabBarButton from "@/components/TabBarButton";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";


export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {

    const [dimensions, setDimensions] = useState({ height: 20, width: 100 });

    const onLayout = (event: LayoutChangeEvent) => {
        const { height, width } = event.nativeEvent.layout;
        setDimensions({ height, width });
    };
    const buttonWidth = dimensions.width / state.routes.length;
    const translateTab = useSharedValue(0);

    useEffect(() => {
        translateTab.value = withSpring(buttonWidth * state.index, { duration: 300 });
    }, [state.index, buttonWidth]);

    // useEffect(() => {
    //     translateTab.value = 0;
    // }, []);


    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateTab.value }],
            // left: translateTab.value
        };
    });

    return (
        <View style={styles.container} onLayout={onLayout}>
            <Animated.View style={[animatedStyle, {
                position: 'absolute',
                borderRadius: 10,
                backgroundColor: '#673ab7',
                width: buttonWidth - 20,
                height: StyleSheet.hairlineWidth * 4,
                top: 0,
                left: 0,
                marginHorizontal: 10,
                transform: [{ translateX: 0 }],
            }]} collapsable={false} />
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    // translateTab.value = withTiming(buttonWidth * index, { duration: 300 });
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                }

                return (
                    <TabBarButton
                        key={route.key}
                        routeName={route.name}
                        isFocused={isFocused}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        color={isFocused ? '#673ab7' : '#222'}
                        label={label.toString()}
                    />
                );
            })}
        </View>
    );

}


const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
    },
    topShadow: {
        position: 'absolute',
        left: 12,
        right: 12,
        top: 0,
        height: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -6 },
        shadowOpacity: 0.12,
        shadowRadius: 10,
        elevation: 20,
        zIndex: 0,
    },
    container: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        // marginHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 25,
        borderRadius: 10,
        backgroundColor: '#fff',
        // borderTopWidth: 1,
        borderTopColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.12,
        shadowRadius: 10,
        // Android shadow
        elevation: 12,
        // allow shadow to render outside the container bounds
        overflow: 'visible',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        padding: 10,
    },
    label: {
        fontSize: 12,
    },
});