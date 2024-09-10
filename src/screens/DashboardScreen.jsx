// screens/DashboardScreen.js
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, Button } from "react-native-paper";

const DashboardScreen = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });

  return (
    <SafeAreaView>
      <View className="flex-1 mt-10 min-h-screen">
        <Card>
          <Card.Content>
            <Text
              style={{
                fontFamily: fontsLoaded ? "Roboto-Bold" : "System",
                fontSize: 20,
              }}
            >
              Card title
            </Text>
            <Text
              style={{
                fontFamily: fontsLoaded ? "Roboto-Bold" : "System",
                fontSize: 16,
              }}
            >
              Card content
            </Text>
          </Card.Content>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Actions>
            <Button onPress={() => console.log("Cancel clicked")}>
              Check My Absent
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
