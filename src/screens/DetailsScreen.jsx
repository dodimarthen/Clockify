// screens/DetailsScreen.js

import { View, Text, TextInput } from "react-native";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailsScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });
  const [pressed, setPressed] = useState(false);
  return (
    <SafeAreaView>
      <View className="flex-1 bg-custom-white items-center justify-start min-h-screen">
        <View className="items-center">
          <Text
            className="text-2xl text-custom-blue font-semibold mt-40 mb-0"
            style={{
              fontFamily: fontsLoaded ? "Roboto-Bold" : "System",
            }}
          >
            Sign in To Your Account
          </Text>
        </View>
        <View className="w-full px-8 mt-10">
          {/* Username Container */}
          <View className="mb-6">
            <Text className="text-s text-slate-800 mb-2 font-bold">
              Username
            </Text>
            <TextInput
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              placeholder="Enter your username"
            />
          </View>

          {/* Password Container */}
          <View className="mb-6">
            <Text className="text-s text-slate-800 mb-2 font-bold">
              Password
            </Text>
            <TextInput
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              placeholder="Enter your password"
              secureTextEntry
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
