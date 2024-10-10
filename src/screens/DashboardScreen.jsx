import React from "react";
import { View, Text, ScrollView } from "react-native";
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
    console.log("View All pressed");
  };

  const handleCardPress = () => {
    console.log("Card pressed!");
  };
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView>
      <SafeAreaView className="flex-1">
        {/* Header Section */}
        <Header />
        {/* Calendar Section */}
        <View className="mt-5">{/* <CalendarComponent /> */}</View>

        {/* Today Attendance Section */}
        <View className="bg-custom-white-two mt-8 rounded-3xl flex-1 pl-4 py-2">
          <Text className="text-left font-bold text-md">Today Attendance</Text>
          <AttendancePanel />
          {/* Row for Your Activity and View All */}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default DashboardScreen;
