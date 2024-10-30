import React from "react";
import { Pressable, Text, ActivityIndicator } from "react-native";

const CustomButton = ({ onPress, loading, text, pressed }) => (
  <Pressable
    onPress={onPress}
    disabled={loading}
    className={`items-center justify-center py-3 px-5 rounded-xl bg-custom-white ${
      pressed ? "opacity-30" : "opacity-100"
    }`}
  >
    {loading ? (
      <ActivityIndicator size="small" color="#0000ff" />
    ) : (
      <Text className="text-custom-blue font-semibold text-base antialiased">
        {text}
      </Text>
    )}
  </Pressable>
);

export default CustomButton;
