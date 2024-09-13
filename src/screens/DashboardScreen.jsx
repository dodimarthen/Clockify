// screens/DashboardScreen.js
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const DashboardScreen = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"), // Load Roboto-Light
  });

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#FF6F61", "#FF9472"]} style={styles.background}>
        <View style={styles.content}>
          <Card style={styles.card}>
            <Card.Content>
              <Text
                style={{
                  ...styles.title,
                  fontFamily: fontsLoaded ? "Roboto-Light" : "System", // Use Roboto-Light
                }}
              >
                Welcome,
              </Text>
              <Text
                style={{
                  ...styles.subTitle,
                  fontFamily: fontsLoaded ? "Roboto-Light" : "System", // Use Roboto-Light
                }}
              >
                user@gmail.com
              </Text>
              <Text
                style={{
                  ...styles.attendanceText,
                  fontFamily: fontsLoaded ? "Roboto-Light" : "System", // Use Roboto-Light
                }}
              >
                Your Attendance Time:
              </Text>
            </Card.Content>
            <Card.Actions style={styles.actions}>
              <Button
                mode="contained"
                onPress={() => console.log("Check My Absent clicked")}
                contentStyle={styles.buttonContent}
                labelStyle={styles.buttonLabel}
                style={[styles.button, { backgroundColor: "#405D72" }]}
              >
                Check My Absent
              </Button>
            </Card.Actions>
          </Card>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  content: {
    marginTop: 50,
  },
  card: {
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Slight transparency for modern look
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    color: "#333",
    textAlign: "left",
  },
  subTitle: {
    fontSize: 18,
    color: "#333",
    textAlign: "left",
    marginTop: 1,
  },
  attendanceText: {
    fontSize: 25,
    color: "#555",
    textAlign: "left",
    marginTop: 20,
  },
  actions: {
    justifyContent: "center",
    marginTop: 20,
  },
  button: {
    borderRadius: 25,
    width: 200,
    alignSelf: "center",
  },
  buttonContent: {
    paddingVertical: 6,
  },
  buttonLabel: {
    fontSize: 16,
    color: "white",
  },
});

export default DashboardScreen;
