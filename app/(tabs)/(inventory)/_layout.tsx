import { Stack } from "expo-router";

const InventoryLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Inventory", headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="CameraScreen"
        options={{
          headerTitle: "Camera Screen",
          headerShown: false,
          headerStyle: { backgroundColor: "red" },
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default InventoryLayout;
