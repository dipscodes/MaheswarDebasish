import {
  CameraCapturedPicture,
  CameraPictureOptions,
  CameraType,
  CameraView,
  CameraViewRef,
  useCameraPermissions,
} from "expo-camera";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { AppConstants } from "@/constants/AppConstants";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const headerBarHeight =
  AppConstants.HeaderBar.height - Constants.statusBarHeight;

const bottomBarHeight =
  Dimensions.get("window").height -
  (Dimensions.get("window").width +
    AppConstants.HeaderBar.height +
    AppConstants.NavigationBar.height);

export default function App() {
  const cameraRef = useRef<CameraView>(null);
  const [facing, setFacing] = useState<CameraType>("back");
  const [camera, setCamera] = useState<CameraViewRef>();
  const [permission, requestPermission] = useCameraPermissions();

  // if (!permission) {
  //   return <View />;
  // }

  // if (!permission.granted) {
  //   return (
  //     <View className="flex flex-1 justify-start flex-col">
  //       <Text style={{ textAlign: "center" }}>
  //         We need your permission to show the camera
  //       </Text>
  //       <Button onPress={requestPermission} title="grant permission" />
  //     </View>
  //   );
  // }

  useEffect(() => {
    async function getSizes() {
      console.log("hi!");
      console.log(permission);
      if (permission?.granted && cameraRef.current) {
        console.log("sized!");
        const sizes = await cameraRef.current.getAvailablePictureSizesAsync();
        setPictureSizes(sizes);
        console.log(sizes);
      }
    }

    getSizes();
  }, [permission, cameraRef]);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  return (
    <View
      className="flex flex-1 justify-center flex-col"
      style={{ paddingTop: Constants.statusBarHeight }}
    >
      <View
        className="w-screen bg-black flex flex-row justify-start items-center pl-3"
        style={{
          height: AppConstants.HeaderBar.height - Constants.statusBarHeight,
        }}
      >
        <MaterialIcons name="keyboard-arrow-left" size={40} color="white" />
      </View>
      <CameraView
        style={styles.camera}
        facing={facing}
        zoom={0}
        autofocus="on"
        ref={cameraRef}
      ></CameraView>
      <View
        className="w-screen bg-slate-900 flex flex-col"
        style={styles.bottomPart}
      >
        <View className="w-full flex flex-row justify-between items-center border-b-2 border-slate-700 h-auto py-4 px-10">
          <TouchableOpacity>
            <MaterialIcons
              name="flip-camera-android"
              size={50}
              color="rgb(148, 163, 184)"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo
              name="circle"
              size={50}
              color="rgb(148, 163, 184)"
              onPress={async () => {
                const photo = await cameraRef.current?.takePictureAsync();
                const photoBase64 = photo?.uri;
                console.log(
                  `photo captured with dimensions: ${photo!.width} x ${
                    photo!.height
                  }`
                );
                console.log(photoBase64);
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="checkmark-done-circle-outline"
              size={57}
              color="rgb(148, 163, 184)"
            />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  bottomPart: {
    height: bottomBarHeight,
  },
});
function setPictureSizes(sizes: string[]) {
  throw new Error("Function not implemented.");
}
