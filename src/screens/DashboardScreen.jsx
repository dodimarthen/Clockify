import React, { useState, useEffect, useCallback } from "react";
import { View, Text, ScrollView, BackHandler } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import AttendancePanel from "../components/Panels/AttendancePanel";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import { handleLogout } from "../services/auth";

const DashboardScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Medium.ttf"),
    Roboto: require("../assets/fonts/Roboto-Bold.ttf"),
  });

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      return () => backHandler.remove();
    }, [])
  );

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView>
      <SafeAreaView className="flex-1">
        <Header />

        <View className="bg-custom-white-two mt-2 rounded-3xl flex-1 pl-4 py-2">
          <Text className="text-left font-bold text-md">Today Attendance</Text>

          <AttendancePanel />
        </View>
        <View>
          <Button
            color="bg-panel-checkedin"
            text="Logout"
            onPress={() => handleLogout(navigation)}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default DashboardScreen;
