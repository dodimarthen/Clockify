import React, { useState } from "react";
import { View, Image, Text, Pressable, Alert } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";

const OnBoardScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });
  const [pressed, setPressed] = useState(false);
  return (
    <SafeAreaView>
      <View className="flex-1 bg-custom-black justify-center items-center min-h-screen">
        <Text
          className="text-3xl mb-2 text-custom-white font-semibold"
          style={{
            fontFamily: fontsLoaded ? "Roboto-Bold" : "System",
          }}
        >
          Welcome To Clockify!
        </Text>

        <Image
          source={require("../assets/img/apb.png")}
          className="h-64 w-64 mb-20 mt-20"
        />

        <Pressable
          onPress={() => navigation.navigate("Details")}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          className={`items-center justify-center py-3 px-8 rounded-lg bg-custom-blue ${
            pressed ? "opacity-40" : "opacity-200"
          }`}
        >
          <Text
            className="text-custom-white font-semibold text-base antialiased tracking-wider"
            style={{
              fontFamily: fontsLoaded ? "Roboto-Bold" : "System",
            }}
          >
            Get Started!
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardScreen;
