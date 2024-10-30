import React from "react";
import { Text, TextInput, View } from "react-native";

const EmailInput = ({ email, setEmail }) => (
  <View className="mt-10">
    <Text className="text-s text-custom-white mb-2 font-bold">Email</Text>
    <TextInput
      className="border border-gray-300 rounded-lg px-4 py-2 w-full text-white"
      placeholder="example@gmail.com"
      placeholderTextColor="#F1EFEF"
      value={email}
      onChangeText={setEmail}
      editable={true}
      selectTextOnFocus={false}
    />
  </View>
);

export default EmailInput;
