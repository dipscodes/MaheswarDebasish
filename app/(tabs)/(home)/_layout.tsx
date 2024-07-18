import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Home", headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
};

export default HomeLayout;
