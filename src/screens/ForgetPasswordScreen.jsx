// screens/DetailsScreen.js

import { View, Text, TextInput, Pressable, Image } from "react-native";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ForgetPasswordScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });
  const [pressedLogin, setPressedLogin] = useState(false);
  const [pressedForgotPassword, setPressedForgotPassword] = useState(false);

  return (
    <SafeAreaView>
      <View className="flex-1 bg-custom-blue items-center justify-center min-h-screen">
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

        <View className="mt-5">
          <Text
            className="text-2xl text-custom-white font-semibold mt-40 mb-0"
            style={{
              fontFamily: fontsLoaded ? "Roboto-Bold" : "System",
            }}
          >
            Forgot Password
          </Text>
        </View>
        <View className="w-full px-8 mt-2">
          {/* Username Container */}
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
