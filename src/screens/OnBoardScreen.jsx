import React, { useState } from "react";
import { View, Image, Text, Pressable, Alert } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button/Button";

const OnBoardScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });
  const [pressed, setPressed] = useState(false);
  return (
    <SafeAreaView>
      <View className="flex-1 bg-custom-white justify-center items-center min-h-screen">
        <Text
          className="text-2xl text-custom-blue font-semibold mt-1 mb-[-20]"
          style={{
            fontFamily: fontsLoaded ? "Roboto-Bold" : "System",
          }}
        >
          Welcome To
        </Text>
        <Image
          source={require("../assets/img/On.Time5.png")}
          className="mb-2 h-20 w-40"
        />

        <Image
          source={require("../assets/img/lol.png")}
          className="h-64 w-64 mb-20 mt-20"
        />

        <Button
          color="bg-custom-black"
          text="Get Started"
          onPress={() => navigation.navigate("LoginPage")}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardScreen;
