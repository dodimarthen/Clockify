import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActionCard from "../Card/ActionCard";
import SwipeToCheckIn from "../SwipeButton/SwipeButtonCheckIn";
import SwipeToCheckOut from "../SwipeButton/SwipeButtonCheckOut";

const AttendancePanel = () => {
  const [isCheckedIn, setIsCheckedIn] = React.useState(false);
  const [checkInTime, setCheckInTime] = React.useState(null);
  const [checkOutTime, setCheckOutTime] = React.useState(null);
  const [isCheckedOut, setIsCheckedOut] = React.useState(false);
  const [isBreakTime, setIsBreakTime] = React.useState(false);
  const breakTime = "Click me!";

  const handleCheckIn = () => {
    setCheckInTime(new Date().toLocaleTimeString());
    setTimeout(() => {
      setIsCheckedIn(true);
    }, 3000);
  };

  return (
    <>
      <View className="flex-row flex-wrap justify-between p-4 mt-1 mr-6 ml-2">
        {/* Check In Card - Not Clickable */}
        <ActionCard
          title="Check In"
          iconSource={require("../../assets/img/login.png")}
          backgroundColor="#41B3A2"
          time={checkInTime}
          isChecked={isCheckedIn}
          children="On Time"
          style={{ width: "48%", marginBottom: 10 }}
        />

        {/* Check Out Card - Not Clickable */}
        <ActionCard
          title="Check Out"
          iconSource={require("../../assets/img/logout.png")}
          backgroundColor="#0000FF80"
          time={checkOutTime}
          isChecked={isCheckedOut}
          children="You did well!"
          style={{ width: "48%", marginBottom: 10 }}
        />
      </View>

      {/* Reduced margin top for the next View */}
      <View className="flex-row flex-wrap justify-between p-4 mr-6 ml-2 mt-0">
        {/* Break Time */}
        <ActionCard
          title="Break Time"
          iconSource={require("../../assets/img/cup.png")}
          backgroundColor="#FBF6EE"
          time={breakTime}
          defaultText="Happy lunch!"
          isChecked={isBreakTime}
          children="12:00 - 13:00 PM"
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
          onPress={() => console.log("Total Days Pressed!")}
          style={{ width: "48%", marginBottom: 20 }}
        />
      </View>

      <View className="mt-1">
        {/* Conditionally render SwipeToCheckIn or SwipeToCheckOut */}
        {!isCheckedIn ? (
          <SwipeToCheckIn
            setCheckInTime={setCheckInTime}
            setIsCheckedIn={handleCheckIn}
          />
        ) : (
          <SwipeToCheckOut
            setCheckOutTime={setCheckOutTime}
            setIsCheckedOut={setIsCheckedOut}
          />
        )}
      </View>
    </>
  );
};

export default AttendancePanel;
