import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FloatingAddProductsButton = () => {
  return (
    <View className="h-[58px] w-[58px] bg-sky-600 flex flex-col justify-center items-center rounded-full">
      <Ionicons name="add-circle-outline" size={50} color="white" />
    </View>
  );
};

export default FloatingAddProductsButton;
