import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const themeColors = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: themeColors.tint,
        tabBarInactiveTintColor: themeColors.icon,
        tabBarStyle: {
          backgroundColor: themeColors.background,
          borderTopColor: colorScheme === "dark" ? "#2a2a2a" : "#eaeaea",
          borderTopWidth: 1,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "Whishlist",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
