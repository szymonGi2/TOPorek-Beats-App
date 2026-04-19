import { Tabs } from "expo-router";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={28} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: () => (
            <Ionicons name="library-outline" size={28} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "Whishlist",
          tabBarIcon: () => (
            <Ionicons name="star-outline" size={28} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
