import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../../screens/DashboardScreen";
import homeIcon from "../../assets/img/home.png";
import settingIcon from "../../assets/img/gear.png";
import listIcon from "../../assets/img/checklist.png";
import profileIcon from "../../assets/img/profile.png";

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <View className="flex-1 justify-center items-center bg-gray-100">
    <Text className="text-lg font-semibold text-indigo-500">Home Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View className="flex-1 justify-center items-center bg-gray-100">
    <Text className="text-lg font-semibold text-green-500">
      Settings Screen
    </Text>
  </View>
);

const ListScreen = () => (
  <View className="flex-1 justify-center items-center bg-gray-100">
    <Text className="text-lg font-semibold text-orange-500">List Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View className="flex-1 justify-center items-center bg-gray-100">
    <Text className="text-lg font-semibold text-purple-500">
      Profile Screen
    </Text>
  </View>
);

const AdminPanel = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Home") {
            return (
              <Image
                source={homeIcon}
                style={{ width: size, height: size, tintColor: color }}
                resizeMode="contain"
              />
            );
          } else if (route.name === "Settings") {
            return (
              <Image
                source={settingIcon}
                style={{ width: size, height: size, tintColor: color }}
                resizeMode="contain"
              />
            );
          } else if (route.name === "List") {
            return (
              <Image
                source={listIcon}
                style={{ width: size, height: size, tintColor: color }}
                resizeMode="contain"
              />
            );
          } else if (route.name === "Profile") {
            return (
              <Image
                source={profileIcon}
                style={{ width: size, height: size, tintColor: color }}
                resizeMode="contain"
              />
            );
          }
        },
        tabBarActiveTintColor: "#091057",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "white", paddingBottom: 1 },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AdminPanel;
