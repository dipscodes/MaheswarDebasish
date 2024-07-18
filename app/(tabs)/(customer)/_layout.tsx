import { Stack } from "expo-router";

const CustomerLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Customers", headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
};

export default CustomerLayout;
