import { Stack } from "expo-router";

const SettingsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Settings", headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
};

export default SettingsLayout;
