// screens/HomeScreen.jsx
import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Home Screen</Text>
        <Text style={{ fontSize: 16, marginVertical: 20 }}>
          Welcome to the Home Screen!
        </Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
