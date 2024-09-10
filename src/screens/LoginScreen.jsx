// screens/DetailsScreen.js

import { View, Text, TextInput, Pressable, Image } from "react-native";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });
  const [pressedLogin, setPressedLogin] = useState(false);
  const [pressedForgotPassword, setPressedForgotPassword] = useState(false);

  return (
    <SafeAreaView>
      <View className="flex-1 bg-custom-blue items-center justify-start min-h-screen">
        <Image
          source={require("../assets/img/Vector.png")}
          className="h-64 w-64"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            zIndex: -1,
          }}
        />

        <View className="items-center">
          <Text
            className="text-2xl text-custom-white font-semibold mt-40 mb-0"
            style={{
              fontFamily: fontsLoaded ? "Roboto-Bold" : "System",
            }}
          >
            Sign in To Your Account
          </Text>
        </View>
        <View className="w-full px-8 mt-10">
          {/* Username Container */}
          <View className="mt-10 ">
            <Text className="text-s text-custom-white mb-2 font-bold">
              Username
            </Text>
            <TextInput
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              placeholder="example@gmail.com"
              placeholderTextColor="#F1EFEF"
            />
          </View>

          {/* Password Container */}
          <View className="mt-4">
            <Text className="text-s text-custom-white mb-2 font-bold">
              Password
            </Text>
            <TextInput
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              placeholder="********"
              placeholderTextColor="#F1EFEF"
              secureTextEntry
            />
          </View>

          {/* Login Button */}
          <View className="mt-6">
            <Pressable
              onPress={() => console.log("Button login clicked")}
              onPressIn={() => setPressedLogin(true)}
              onPressOut={() => setPressedLogin(false)}
              className={`items-center justify-center py-3 px-5 rounded-xl bg-custom-white ${
                pressedLogin ? "opacity-30" : "opacity-100"
              }`}
            >
              <Text
                className="text-custom-blue font-semibold text-base antialiased"
                style={{
                  fontFamily: fontsLoaded ? "Roboto-Bold" : "System",
                }}
              >
                Login
              </Text>
            </Pressable>
          </View>

          {/* Forget Password Button */}
          <View className="mt-1">
            <Pressable
              onPressIn={() => setPressedForgotPassword(true)}
              onPressOut={() => setPressedForgotPassword(false)}
              onPress={() => {
                console.log("Forgot password clicked!");
              }}
              className={`items-center justify-center py-3 px-5 rounded-xl ${
                pressedForgotPassword ? "opacity-30" : "opacity-100"
              }`}
            >
              <Text
                className="font-semibold text-custom-white subpixel-antialiased"
                style={{
                  color: pressedForgotPassword ? "#FFFFFF" : "#FFFFFF",
                }}
              >
                Forget your password?
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
