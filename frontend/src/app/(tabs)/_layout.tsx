import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Clock, ElementPlus, Home, Notification } from "iconsax-react-native";

const screenOptions = {
  tabBarStyle: {
    height: 70,
  },
  tabBarShowLabel: true,
  headerShown: false,
};
const _layout = () => {
  return (
    <Tabs screenOptions={screenOptions}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ size, color }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          tabBarIcon: ({ size, color }) => <Clock size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="notice"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Notification size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          tabBarIcon: ({ size, color }) => (
            <ElementPlus size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
