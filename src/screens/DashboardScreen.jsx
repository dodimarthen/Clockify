import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import CalendarComponent from "../components/Calendar/Calendar";
import AttendancePanel from "../components/Panels/AttendancePanel";
import Header from "../components/Header/Header";

const DashboardScreen = () => {
  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Medium.ttf"),
    Roboto: require("../assets/fonts/Roboto-Bold.ttf"),
  });

  const handleViewAllPress = () => {
    // Handle the press event here
    console.log("View All pressed");
  };

  const handleCardPress = () => {
    console.log("Card pressed!");
  };
  if (!fontsLoaded) {
    return null; // Or a loading spinner
  }

  return (
    <ScrollView>
      <SafeAreaView className="flex-1 bg-white">
        {/* Header Section */}
        <Header />
        {/* Calendar Section */}
        <View className="mt-5">
          <CalendarComponent />
        </View>

        {/* Today Attendance Section */}
        <View className="bg-custom-white-two mt-8 rounded-3xl flex-1 pl-4 py-2">
          <Text className="text-left font-bold text-md">Today Attendance</Text>
          <AttendancePanel />
          {/* Row for Your Activity and View All */}
          <View className="flex-row justify-between items-center">
            <Text className="font-bold text-md">Your Activity</Text>
            <TouchableOpacity onPress={handleViewAllPress}>
              <Text className="font-bold mr-5 text-sm text-blue-700">
                View All
              </Text>
            </TouchableOpacity>
          </View>
          {/* Your Attendance Section */}
          <View className="bg-white rounded-lg shadow-md p-4 m-2 mr-5">
            <Text className="font-bold text-md mb-1">Check In</Text>
            <Text className="text-gray-700 text-xs">08.30 am</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default DashboardScreen;
