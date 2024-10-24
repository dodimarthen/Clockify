import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Button({ text, onPress, color }) {
  return (
    <View className="items-center mt-5">
      <TouchableOpacity
        className={`${color} hover:bg-blue-700 rounded-xl py-4 px-6`}
        onPress={onPress}
      >
        <Text className="text-white font-bold text-sm">{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
