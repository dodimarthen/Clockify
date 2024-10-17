import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const ActionCard = ({
  title,
  iconSource,
  backgroundColor,
  time,
  defaultText,
  isChecked,
  onPress,
  marginRight,
  marginLeft,
  children,
}) => {
  return (
    <View
      className={`bg-white rounded-2xl p-4 w-[45%] ${marginRight} ${marginLeft}`}
    >
      <TouchableOpacity onPress={onPress}>
        <View className="flex-row items-center mb-2">
          {/* Icon beside the text */}
          <View className="p-2 rounded-xl mr-2" style={{ backgroundColor }}>
            <Image
              source={iconSource}
              style={{ width: 18, height: 18 }}
              resizeMode="contain"
            />
          </View>
          <Text className="text-gray-700 font-bold">{title}</Text>
        </View>
        <Text className="text-gray-800 font-bold text-md mt-3">{children}</Text>
        <Text className="text-slate-600 font-normal text-left">
          {isChecked ? time : defaultText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionCard;
