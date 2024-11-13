// AttendanceRecordPage.js
import React from "react";
import { View } from "react-native";
import AttendanceRecord from "../Panels/AttendanceRecord";
import { SafeAreaView } from "react-native-safe-area-context";

const AttendanceRecordPage = ({ route }) => {
  const { checkInTime, checkOutTime } = route.params;

  return (
    <SafeAreaView>
      <View>
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
      </View>
    </SafeAreaView>
  );
};

export default AttendanceRecordPage;
