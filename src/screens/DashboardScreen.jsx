import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-paper";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import CalendarComponent from "../components/Calendar/Calendar";

const DashboardScreen = () => {
  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Medium.ttf"),
    Roboto: require("../assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header Section */}
      <View className="flex-row items-center p-4 mt-2">
        <Avatar.Image
          size={50}
          source={{
            uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4", // Replace with your image URL or local asset
          }}
        />
        <View className="ml-2">
          <Text className="font-roboto text-lg font-bold">John Doe</Text>
          <Text className="font-montserrat text-sm text-gray-500">
            Software Engineer
          </Text>
        </View>
      </View>

      {/* Calendar Section with same ml and mr */}
      <View className="mt-5">
        <CalendarComponent />
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
