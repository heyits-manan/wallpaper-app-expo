import { DownloadPicture } from "@/components/BottomSheet";
import { useWallpapers } from "@/hooks/useWallpapers";
import { Slot, Stack } from "expo-router";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

export default function Layout() {
  const walletpapers = useWallpapers();
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <Stack.Screen name="(nobottombar)/accountinfo" options={{ headerShown: true, headerTitle: "Account info", headerBackTitle: "Go Back" }} /> */}
        </Stack>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
