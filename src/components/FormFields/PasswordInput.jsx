import React from "react";
import { Text, TextInput, Pressable, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const PasswordInput = ({
  password,
  setPassword,
  passwordVisible,
  togglePasswordVisibility,
}) => (
  <View className="mt-4 relative">
    <Text className="text-s mb-2 font-bold text-white">Password</Text>
    <TextInput
      className="border border-gray-300 rounded-lg px-4 py-2 w-full text-custom-white"
      placeholder="********"
      placeholderTextColor="#F1EFEF"
      secureTextEntry={!passwordVisible}
      value={password}
      onChangeText={setPassword}
      editable={true}
      selectTextOnFocus={false}
    />
    <Pressable
      onPress={togglePasswordVisibility}
      style={{ position: "absolute", right: 10, top: 38 }}
    >
      <Entypo
        name={passwordVisible ? "eye-with-line" : "eye"}
        size={18}
        color="white"
      />
    </Pressable>
  </View>
);

export default PasswordInput;
