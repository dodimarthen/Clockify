// navigation/AppNavigator.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OnBoardScreen from "../screens/OnBoardScreen";
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";
import HomeScreen from "../screens/Homescreen";
import SettingsScreen from "../screens/SettingScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ForgetPasswordScreen from "../screens/ForgetPasswordScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-dashboard"
              size={size}
              color={color}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="ForgetPassword"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="MyTabs" component={MyTabs} />
    <Stack.Screen name="LoginPage" component={LoginScreen} />
    <Stack.Screen name="OnBoard" component={OnBoardScreen} />
    <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
