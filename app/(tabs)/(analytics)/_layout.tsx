import { Stack } from "expo-router";

const AnalyticsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Analytics", headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
};

export default AnalyticsLayout;
