// screens/LoginScreen.js

import { View, Text, TextInput, Pressable, Image } from "react-native";
import { useFonts } from "expo-font";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });
  const [pressedLogin, setPressedLogin] = useState(false);
  const [pressedForgotPassword, setPressedForgotPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const sampleCredentials = {
    username: "johndoe@gmail.com",
    password: "123",
  };

  useEffect(() => {
    if (loginError) {
      // Set a timer to clear the error message after 5 seconds
      const timer = setTimeout(() => {
        setLoginError("");
      }, 2000);

      // Clear the timer if the component unmounts or error changes
      return () => clearTimeout(timer);
    }
  }, [loginError]);

  const handleLogin = () => {
    if (
      username === sampleCredentials.username &&
      password === sampleCredentials.password
    ) {
      // Navigate to DashboardScreen on successful login
      navigation.navigate("Dashboard");
    } else {
      // Set login error message
      setLoginError("Invalid username or password");
    }
  };

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
          <Image source={require("../assets/img/smallicons.png")} />
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
              value={username}
              onChangeText={setUsername}
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
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Login Button */}
          <View className="mt-6">
            <Pressable
              onPress={handleLogin}
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

          {/* Error Message */}
          {loginError ? (
            <Text className="text-custom-white text-center mt-2">
              {loginError}
            </Text>
          ) : null}

          {/* Forget Password Button */}
          <View className="mt-1">
            <Pressable
              onPressIn={() => setPressedForgotPassword(true)}
              onPressOut={() => setPressedForgotPassword(false)}
              onPress={() => navigation.navigate("ForgetPassword")}
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
