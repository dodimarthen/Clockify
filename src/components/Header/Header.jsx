import { View, Text } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Header = () => {
  return (
    <View className="flex-row items-center justify-between p-4 mt-2">
      <View className="flex-row items-center">
        <Avatar.Image
          size={50}
          source={{
            uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4",
          }}
        />
        <View className="ml-2">
          <Text className="font-roboto text-lg font-bold">John Doe</Text>
          <Text className="font-montserrat text-sm text-gray-500">
            Software Engineer
          </Text>
        </View>
      </View>

      <View
        style={{ backgroundColor: "rgba(240, 235, 227, 0.25)" }}
        className="p-2 rounded-full mr-4"
      >
        <MaterialIcons name="notifications-none" size={24} color="black" />
      </View>
    </View>
  );
};

export default Header;
