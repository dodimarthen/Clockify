import { View, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Button } from "react-native-paper";

const DashboardScreen = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Light": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Render nothing until the fonts are loaded
  }

  return (
    <SafeAreaView className="flex-1 px-4 mt-6">
      <View className="flex-row justify-between mb-6">
        <View>
          <Text className="text-base font-light text-black">Welcome Back,</Text>
          <Text className="text-3xl font-bold text-black">User!</Text>
        </View>
      </View>

      <View className="mt-2 items-center">
        <Card className="h-60 w-60">
          <Card.Title title="Your Clock In Time" className="mt-1" />
          <Card.Content>
            <View className="relative items-center mt-8 mb-20">
              <Text>Clock In Time</Text>
            </View>
          </Card.Content>
          <Card.Actions>
            <Button>Click me!</Button>
          </Card.Actions>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
