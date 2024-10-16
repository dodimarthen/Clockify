import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Button({ text, onPress, color }) {
  return (
    <View className="items-center mt-5">
      <TouchableOpacity
        className={`${color} hover:bg-blue-700 rounded-lg py-4 px-8`}
        onPress={onPress}
      >
        <Text className="text-white font-bold">{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
