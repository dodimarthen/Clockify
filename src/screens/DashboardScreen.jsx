import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Button } from "react-native-paper";

const DashboardScreen = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Light": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  return (
    <SafeAreaView>
      <View className="flex my-6 px-4 space-y-8 bg-custom-white">
        <View className="flex justify-between items-start flex-row mb-6">
          <View>
            <Text className="font-medium text-base text-black">
              Welcome Back
            </Text>
            <Text className="text-3xl font-semibold text-black">User!</Text>
          </View>
        </View>
      </View>
      <View className="bg-custom-white">
        <Card className="h-50 w-full">
          <View className="p-4">
            <Text className="text-lg font-semibold">Card Content</Text>
            <Button
              className="mt-20"
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Check My Absent
            </Button>
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
