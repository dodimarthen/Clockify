import React from "react";
import {
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";

const OnBoardScreen = () => {
  return (
    <View className="flex-1 bg-custom-white justify-center items-center">
      <Image
        source={require("../assets/img/apb.png")}
        className="h-80 w-80 mb-40"
      />

      <TouchableOpacity
        onPress={() => Alert.alert("Simple Button pressed")}
        className="h-10 px-6 font-semibold rounded-md bg-none"
      >
        <Text className="text-black text-center text-2xl">
          Sign in to continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoardScreen;
