// screens/SettingsScreen.jsx
import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Settings Screen
        </Text>
        <Text style={{ fontSize: 16, marginVertical: 20 }}>
          Manage your settings here.
        </Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
