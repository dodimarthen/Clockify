import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Button() {
  return (
    <View className="items-center mt-5">
      <TouchableOpacity className="bg-blue-500 hover:bg-blue-700 rounded-lg py-4 px-8">
        <Text className="text-white font-bold">Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
