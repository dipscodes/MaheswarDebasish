import FloatingAddProductsButton from "@/components/FloatingAddProductsButton";
import Constants from "expo-constants";
import { Link } from "expo-router";
import { View } from "react-native";

const Inventory = () => {
  return (
    <View
      className="flex flex-col justify-start items-center w-screen h-screen"
      style={{ paddingTop: Constants.statusBarHeight }}
    >
      {/* <Text className="text-white">Inventory</Text> */}
      <Link
        href="CameraScreen"
        className="absolute bottom-[50px] right-[25px] rounded-full"
      >
        <FloatingAddProductsButton />
      </Link>
    </View>
  );
};

export default Inventory;
