import React, { useState, useRef } from "react";
import { View, Text, Animated, PanResponder, Image } from "react-native";
import { useFonts } from "expo-font";

const SwipeToCheckIn = ({ setCheckInTime, setIsCheckedIn }) => {
  const [fontsLoaded] = useFonts({
    Montserrat: require("../../assets/fonts/Montserrat-Thin.ttf"),
  });

  const [isCheckedIn, setIsCheckedInLocal] = useState(false);
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
          const currentTime = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          Animated.spring(pan, {
            toValue: { x: 250, y: 0 },
            useNativeDriver: false,
          }).start(() => {
            setIsCheckedInLocal(true);
            setIsCheckedIn(true);
            setCheckInTime(currentTime);
            console.log(`Checked in at: ${currentTime}`);
          });
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
    <View className="flex-1 justify-center items-center">
      <View className="relative w-[370px] h-[60px] bg-[#4682A9] rounded-full justify-center mr-2 mt-3">
        <Animated.View
          {...panResponder.panHandlers}
          style={[pan.getLayout(), { position: "relative", zIndex: 10 }]}
          className="my-auto w-[50px] h-[50px] bg-white rounded-full justify-center items-center ml-2"
        >
          <Text
            style={{ fontFamily: "Roboto", fontWeight: "bold" }}
            className="text-xl text-blue-500"
          >
            →
          </Text>
        </Animated.View>

        {isCheckedIn ? (
          <>
            <Text
              style={{ fontFamily: "Montserrat" }}
              className="absolute w-full text-center text-white font-bold"
            >
              Checked in complete!
            </Text>
            <Image
              source={require("../../assets/img/check.png")}
              style={{ width: 20, height: 20, position: "absolute", right: 93 }}
            />
          </>
        ) : (
          <Text
            style={{ fontFamily: "Montserrat" }}
            className="absolute w-full text-center text-white font-bold"
          >
            Swipe to Check In
          </Text>
        )}
      </View>
    </View>
  );
};

export default SwipeToCheckIn;
