// screens/ForgetPasswordScreen.js

import { View, Text, TextInput, Pressable, Image } from "react-native";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ForgetPasswordScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });
  const [pressedForgotPassword, setPressedForgotPassword] = useState(false);

  return (
    <SafeAreaView>
      <View className="flex-1 bg-custom-blue justify-center min-h-screen">
        {/* <Image
          source={require("../assets/img/Vector.png")}
          className="h-64 w-64"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            zIndex: -1,
          }}
        /> */}

        <View className="mt-5">
          <Text
            className="text-3xl text-custom-white font-semibold text-left ml-8"
            style={{
              fontFamily: fontsLoaded ? "Roboto-Bold" : "System",
            }}
          >
            Forgot Password?
          </Text>
        </View>

        <View>
          <Text className="text-custom-white text-left ml-8 text-xs">
            Don't worry! It happens sometimes. {"\n"}Please enter your
            registered email.
          </Text>
        </View>

        <View className="w-full px-8 mt-2">
          {/* Email Container */}
          <View className="mt-2">
            <Text className="text-s text-custom-white mb-2 font-bold">
              Email
            </Text>
            <TextInput
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              placeholder="example@gmail.com"
              placeholderTextColor="#F1EFEF"
            />
          </View>

          {/* Forgot Password Button */}
          <View className="mt-6">
            <Pressable
              onPress={() => console.log("Continue button clicked")}
              onPressIn={() => setPressedForgotPassword(true)}
              onPressOut={() => setPressedForgotPassword(false)}
              className={`items-center justify-center py-3 px-5 rounded-xl bg-custom-white ${
                pressedForgotPassword ? "opacity-30" : "opacity-100"
              }`}
            >
              <Text
                className="text-custom-blue font-semibold text-base antialiased"
                style={{
                  fontFamily: fontsLoaded ? "Roboto-Bold" : "System",
                }}
              >
                Continue
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPasswordScreen;
