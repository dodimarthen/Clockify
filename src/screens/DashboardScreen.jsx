import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";

const DashboardScreen = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Light": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="bg-custom-white">
      <View className="flex-row items-center p-6 bg-custom-white">
        <Avatar.Image
          size={55}
          source={{
            uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4", // Replace with your image URL or local asset
          }}
        />
        <View className="ml-4">
          <Text className="text-lg font-extrabold">John Doe</Text>
          <Text className="text-base text-gray-500">Software Engineer</Text>
        </View>

        <View className="ml-auto">
          <Ionicons name="notifications-outline" size={32} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
