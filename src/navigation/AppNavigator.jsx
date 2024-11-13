// AppNavigator.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardScreen from "../screens/OnBoardScreen";
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";
import AdminPanel from "../components/Panels/AdminPanel";
import ForgetPasswordScreen from "../screens/ForgetPasswordScreen";
import UserPanel from "../components/Panels/UserPanel";
import AttendanceRecordPage from "../components/Pages/AttendanceRecordPage";

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="OnBoard"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
    <Stack.Screen name="LoginPage" component={LoginScreen} />
    <Stack.Screen name="OnBoard" component={OnBoardScreen} />
    <Stack.Screen name="AdminPanel" component={AdminPanel} />
    <Stack.Screen name="UserPanel" component={UserPanel} />
    <Stack.Screen
      name="AttendanceRecordPage"
      component={AttendanceRecordPage}
    />
    <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
