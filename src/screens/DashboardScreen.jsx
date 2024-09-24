import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Avatar } from "react-native-paper";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import CalendarComponent from "../components/Calendar/Calendar";
import CardForAttendance from "../components/Calendar/CardForAttendance";

const DashboardScreen = () => {
  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Medium.ttf"),
    Roboto: require("../assets/fonts/Roboto-Bold.ttf"),
  });

  const [isCheckedIn, setIsCheckedIn] = React.useState(false);
  const [isCheckedOut, setIsCheckedOut] = React.useState(false);
  const checkInTime = "09:00 AM";
  const checkOutTime = "05:00 PM";

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header Section */}
      <View className="flex-row items-center p-4 mt-2">
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

      {/* Calendar Section */}
      <View className="mt-5">
        <CalendarComponent />
      </View>

      {/* Today Attendance Section */}
      <View className="bg-gray-100 mt-8 rounded-3xl flex-1 pl-4 py-2">
        <Text className="text-left font-bold text-md">Today Attendance</Text>
        <View className="flex-row justify-between p-4 mt-1">
          {/* Check In Card */}
          <CardForAttendance
            title="Check In"
            iconSource={require("../assets/img/login.png")}
            backgroundColor="#41B3A2"
            time={checkInTime}
            defaultText="On Time"
            isChecked={isCheckedIn}
            children="08:45 am"
            onPress={() => setIsCheckedIn(!isCheckedIn)}
            marginRight="mr-2"
          />

          {/* Check Out Card */}
          <CardForAttendance
            title="Check Out"
            iconSource={require("../assets/img/logout.png")}
            backgroundColor="#0000FF80"
            time={checkOutTime}
            defaultText="Go Home"
            isChecked={isCheckedOut}
            children="17:00 pm"
            onPress={() => setIsCheckedOut(!isCheckedOut)}
            marginLeft="mr-4"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
