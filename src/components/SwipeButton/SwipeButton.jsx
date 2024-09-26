import React, { useState, useRef } from "react";
import { View, Text, Animated, PanResponder } from "react-native";
import { useFonts } from "expo-font";

const SwipeToCheckIn = () => {
  const [fontsLoaded] = useFonts({
    Montserrat: require("../../assets/fonts/Montserrat-Thin.ttf"),
  });

  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dx > 150) {
          Animated.spring(pan, {
            toValue: { x: 250, y: 0 },
            useNativeDriver: false,
          }).start(() => setIsCheckedIn(true));
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="relative w-[350px] h-[60px] bg-blue-500 rounded-lg justify-center">
        <Animated.View
          {...panResponder.panHandlers}
          style={[pan.getLayout(), { position: "relative", zIndex: 10 }]}
          className="my-auto w-[50px] h-[50px] bg-white rounded-lg justify-center items-center ml-2"
        >
          <Text
            style={{ fontFamily: "Roboto", fontWeight: "bold" }}
            className="text-xl text-blue-500"
          >
            →
          </Text>
        </Animated.View>

        <Text
          style={{ fontFamily: "Montserrat" }}
          className="absolute w-full text-center text-white font-bold"
        >
          {isCheckedIn ? "Checked In" : "Swipe to Check In"}
        </Text>
      </View>
    </View>
  );
};

export default SwipeToCheckIn;
