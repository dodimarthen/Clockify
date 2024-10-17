import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";
import React, { useState, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });
  const [pressedLogin, setPressedLogin] = useState(false);
  const [pressedForgotPassword, setPressedForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loginError) {
      const timer = setTimeout(() => {
        setLoginError("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loginError]);

  const handleLogin = async () => {
    console.log("Login button pressed");
    if (!email || !password) {
      setLoginError("Please enter your username and password.");
      console.log("Email or password is empty");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log("Response received", response);

      const data = await response.json();
      console.log("Data received", data);

      if (response.ok) {
        if (data.token) {
          await AsyncStorage.setItem("token", data.token);
          navigation.navigate("Dashboard");
        } else {
          setLoginError("Login failed: Token not received");
        }
      } else {
        setLoginError(
          data.error || "An unexpected error occurred. Please try again."
        );
      }
    } catch (error) {
      Alert.alert("Error", "Unable to login. Please try again later.");
      console.error("Login error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-custom-blue items-center justify-start min-h-screen">
      <View className="items-center">
        <Text
          className="text-2xl text-custom-white font-semibold mt-40 mb-[-20]"
          style={{
            fontFamily: fontsLoaded ? "Roboto-Bold" : "System",
          }}
        >
          Sign in To Your Account
        </Text>
        <Image
          source={require("../assets/img/On.Time5.png")}
          className="mb-5 w-40 h-20"
        />
      </View>

      <View className="w-full px-8 mt-10">
        <View className="mt-10">
          <Text className="text-s text-custom-white mb-2 font-bold">Email</Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-2 w-full text-white"
            placeholder="example@gmail.com"
            placeholderTextColor="#F1EFEF"
            value={email}
            onChangeText={setEmail}
            editable={!loading}
            selectTextOnFocus={true}
          />
        </View>

        <View className="mt-4 relative">
          <Text className="text-s mb-2 font-bold text-white">Password</Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-2 w-full text-custom-white"
            placeholder="********"
            placeholderTextColor="#F1EFEF"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
            editable={!loading}
            selectTextOnFocus={true}
          />

          <Pressable
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={{ position: "absolute", right: 10, top: 38 }}
          >
            <Entypo
              name={passwordVisible ? "eye-with-line" : "eye"}
              size={18}
              color="white"
            />
          </Pressable>
        </View>

        <View className="mt-6">
          <Pressable
            onPress={handleLogin}
            onPressIn={() => setPressedLogin(true)}
            onPressOut={() => setPressedLogin(false)}
            disabled={loading}
            className={`items-center justify-center py-3 px-5 rounded-xl bg-custom-white ${
              pressedLogin ? "opacity-30" : "opacity-100"
            }`}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#0000ff" />
            ) : (
              <Text
                className="text-custom-blue font-semibold text-base antialiased"
                style={{
                  fontFamily: fontsLoaded ? "Roboto-Bold" : "System",
                }}
              >
                Login
              </Text>
            )}
          </Pressable>
        </View>

        {loginError ? (
          <Text className="text-custom-white text-center mt-2">
            {loginError}
          </Text>
        ) : null}

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
  );
};

export default LoginScreen;
