import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          flex: 1,
          flexDirection: "row",
          maxHeight: 71,
          minHeight: 71,
          paddingBottom: 10,
          paddingTop: 3,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
          href: null,
        }}
      />
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(inventory)"
        options={{
          title: "Inventory",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "archive" : "archive-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(customer)"
        options={{
          title: "Customer",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person-circle" : "person-circle-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(analytics)"
        options={{
          title: "Analytics",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "analytics" : "analytics-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(settings)"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "settings" : "settings-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
