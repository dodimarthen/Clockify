// AttendanceRecord.jsx
import React from "react";
import { View, Text, Image } from "react-native";

const AttendanceRecord = ({ status, date, time, iconSource, bgColor }) => {
  return (
    <View className="bg-white rounded-lg shadow-md p-4 m-2 mr-5 mt-2">
      <View className="bg-white rounded-md shadow-sm flex-row justify-between items-center">
        <View className="flex-row items-center">
          {/* Image with background box */}
          <View className={`${bgColor} p-2 rounded-full`}>
            <Image
              source={iconSource}
              style={{ width: 18, height: 18 }}
              resizeMode="contain"
            />
          </View>

          <View className="ml-2">
            <Text className="font-bold text-md">{status}</Text>
            <Text className="text-gray-500 text-xs">{date}</Text>
          </View>
        </View>

        <View className="items-end">
          <Text className="text-sm font-bold">{time}</Text>
          <Text className="text-gray-500 text-xs">On Time</Text>
        </View>
      </View>
    </View>
  );
};

export default AttendanceRecord;
