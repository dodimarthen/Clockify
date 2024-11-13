import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import ActionCard from "../Card/ActionCard";
import SwipeToCheckIn from "../SwipeButton/SwipeButtonCheckIn";
import SwipeToCheckOut from "../SwipeButton/SwipeButtonCheckOut";
import AttendanceRecord from "./AttendanceRecord";
import { useNavigation } from "@react-navigation/native";

const AttendancePanel = () => {
  const navigation = useNavigation();
  const [isCheckedIn, setIsCheckedIn] = React.useState(false);
  const [checkInTime, setCheckInTime] = React.useState(null);
  const [checkOutTime, setCheckOutTime] = React.useState(null);
  const [isCheckedOut, setIsCheckedOut] = React.useState(false);
  const [checkInMessage, setCheckInMessage] = React.useState("");
  const [checkOutMessage, setCheckOutMessage] =
    React.useState("Not Available Yet!");

  const handleCheckIn = () => {
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    if (formattedTime <= "08:45:59") {
      setCheckInMessage("On Time");
    } else {
      setCheckInMessage("You are late!");
    }

    setCheckInTime(formattedTime);
    setTimeout(() => {
      setIsCheckedIn(true);
    }, 3000);
  };

  const handleCheckOut = () => {
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    setCheckOutTime(formattedTime);
    setCheckOutMessage("Take Care!👋");
    setTimeout(() => {
      setIsCheckedOut(true);
    }, 3000);
  };

  const handleViewAllPress = () => {
    navigation.navigate("AttendanceRecordPage", {
      checkInTime,
      checkOutTime,
    });
  };

  const [fontsLoaded] = useFonts({
    Montserrat: require("../../assets/fonts/Montserrat-Medium.ttf"),
    Roboto: require("../../assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View className="flex-row flex-wrap justify-between p-4 mt-1 mr-6 ml-2">
        <ActionCard
          title="Check In"
          iconSource={require("../../assets/img/login.png")}
          backgroundColor="#41B3A2"
          time={checkInTime}
          isChecked={isCheckedIn}
          children={checkInMessage}
          style={{ width: "48%", marginBottom: 10 }}
        />

        <ActionCard
          title="Check Out"
          iconSource={require("../../assets/img/logout.png")}
          backgroundColor="#0000FF80"
          time={checkOutTime}
          isChecked={isCheckedOut}
          children={checkOutMessage}
          style={{ width: "48%", marginBottom: 10 }}
        />
      </View>

      <View className="flex-row flex-wrap justify-between p-4 mr-6 ml-2 mt-0">
        <ActionCard
          title="Break Time"
          iconSource={require("../../assets/img/cup.png")}
          backgroundColor="#FBF6EE"
          defaultText="Happy lunch!"
          children="12:00 - 13:00 PM"
          style={{ width: "48%", marginBottom: 10 }}
        />

        <ActionCard
          title="Total Days"
          iconSource={require("../../assets/img/calendar.png")}
          backgroundColor="#F0F0F0"
          defaultText="Working Days"
          children="28 Days"
          onPress={() => console.log("Total Days Pressed!")}
          style={{ width: "48%", marginBottom: 20 }}
        />
      </View>

      <View className="mt-2 mb-4">
        {!isCheckedIn ? (
          <SwipeToCheckIn
            setCheckInTime={setCheckInTime}
            setIsCheckedIn={handleCheckIn}
          />
        ) : (
          <SwipeToCheckOut
            setCheckOutTime={setCheckOutTime}
            setIsCheckedOut={handleCheckOut}
          />
        )}
      </View>

      <View className="flex-row justify-between items-center mt-6 mx-4">
        <Text className="font-bold text-md">Your Activity</Text>
        <TouchableOpacity onPress={handleViewAllPress}>
          <Text className="font-bold text-sm text-blue-700">View All</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-4 mx-4">
        <AttendanceRecord
          status="Checked In"
          date="April 17, 2024"
          time={checkInTime}
          iconSource={require("../../assets/img/login.png")}
          bgColor="bg-panel-checkedin"
        />
        <AttendanceRecord
          status="Checked Out"
          date="April 17, 2024"
          time={checkOutTime}
          iconSource={require("../../assets/img/logout.png")}
          bgColor="bg-custom-green"
        />
      </View>
    </>
  );
};

export default AttendancePanel;
