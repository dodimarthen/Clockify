import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActionCard from "../Card/ActionCard";

const AttendancePanel = () => {
  const [isCheckedIn, setIsCheckedIn] = React.useState(false);
  const [isCheckedOut, setIsCheckedOut] = React.useState(false);
  const [isBreakTime, setIsBreakTime] = React.useState(false);
  const checkInTime = "08:45 AM";
  const checkOutTime = "05:00 PM";
  const breakTime = "12:00 PM";
  return (
    <>
      <View className="flex-row flex-wrap justify-between p-4 mt-1 mr-6 ml-2">
        {/* Check In Card */}
        <ActionCard
          title="Check In"
          iconSource={require("../../assets/img/login.png")}
          backgroundColor="#41B3A2"
          time={checkInTime}
          defaultText="On Time"
          isChecked={isCheckedIn}
          children="08:45 am"
          onPress={() => setIsCheckedIn(!isCheckedIn)}
          style={{ width: "48%", marginBottom: 10 }}
        />

        {/* Check Out Card */}
        <ActionCard
          title="Check Out"
          iconSource={require("../../assets/img/logout.png")}
          backgroundColor="#0000FF80"
          time={checkOutTime}
          defaultText="Go Home"
          isChecked={isCheckedOut}
          children="17:00 pm"
          onPress={() => setIsCheckedOut(!isCheckedOut)}
          style={{ width: "48%", marginBottom: 10 }}
        />
      </View>

      {/* Reduced margin top for the next View */}
      <View className="flex-row flex-wrap justify-between p-4 mr-6 ml-2 mt-0">
        {/* Break Time */}
        <ActionCard
          title="Break Time"
          iconSource={require("../../assets/img/cup.png")}
          backgroundColor="#FFB7B7"
          time={breakTime}
          defaultText="Happy lunch!"
          isChecked={isBreakTime}
          children="12:00 pm"
          onPress={() => setIsBreakTime(!isBreakTime)}
          style={{ width: "48%", marginBottom: 10 }}
        />

        {/* Total Days */}
        <ActionCard
          title="Total Days"
          iconSource={require("../../assets/img/calendar.png")}
          backgroundColor="#F0F0F0"
          defaultText="Working Days"
          children="28 Days"
          onPress={() => setIsCheckedOut(!isCheckedOut)}
          style={{ width: "48%", marginBottom: 20 }}
        />
      </View>
    </>
  );
};

export default AttendancePanel;
