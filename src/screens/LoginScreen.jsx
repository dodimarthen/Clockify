// screens/LoginScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import { handleLogin } from "../services/auth";
import CustomSnackbar from "../components/CustomSnackBar/SnackBar";
import EmailInput from "../components/FormFields/EmailInput";
import PasswordInput from "../components/FormFields/PasswordInput";
import CustomButton from "../components/Button/CustomButton";

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
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  useEffect(() => {
    if (loginError) {
      setSnackbarVisible(true);
      const timer = setTimeout(() => {
        setLoginError("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loginError]);

  const onLoginPress = () => {
    handleLogin(email, password, navigation, setLoading, setLoginError);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <SafeAreaView>
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
          <EmailInput email={email} setEmail={setEmail} />
          <PasswordInput
            password={password}
            setPassword={setPassword}
            passwordVisible={passwordVisible}
            togglePasswordVisibility={togglePasswordVisibility}
          />

          <View className="mt-6">
            <CustomButton
              onPress={onLoginPress}
              loading={loading}
              text="Login"
              pressed={pressedLogin}
              onPressIn={() => setPressedLogin(true)}
              onPressOut={() => setPressedLogin(false)}
            />
          </View>

          <View className="mt-1">
            <Pressable
              onPressIn={() => setPressedForgotPassword(true)}
              onPressOut={() => setPressedForgotPassword(false)}
              onPress={() => navigation.navigate("ForgetPassword")}
              className={`items-center justify-center py-3 px-5 rounded-xl ${
                pressedForgotPassword ? "opacity-30" : "opacity-100"
              }`}
            >
              <Text className="font-semibold text-custom-white subpixel-antialiased">
                Forget your password?
              </Text>
            </Pressable>
          </View>

          <CustomSnackbar
            visible={snackbarVisible}
            onDismiss={() => setSnackbarVisible(false)}
            message={loginError}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
