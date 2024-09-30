import React, { useState, useRef } from "react";
import { View, Text, Animated, PanResponder, Image } from "react-native";
import { useFonts } from "expo-font";

const SwipeToCheckOut = ({ setCheckOutTime, setIsCheckedOut }) => {
  const [fontsLoaded] = useFonts({
    Montserrat: require("../../assets/fonts/Montserrat-Thin.ttf"),
  });

  const [isCheckedOut, setIsCheckedOutLocal] = useState(false);
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
            setIsCheckedOutLocal(true);
            setIsCheckedOut(true);
            setCheckOutTime(currentTime);
            console.log(`Checked out at: ${currentTime}`); // Log message for checkout
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
      <View className="relative w-[370px] h-[60px] bg-[#597445] rounded-full justify-center mr-2 mt-3">
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

        {isCheckedOut ? (
          <>
            <Text
              style={{ fontFamily: "Montserrat" }}
              className="absolute w-full text-center text-white font-bold"
            >
              Checked Out Complete!
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
            Swipe to Check Out
          </Text>
        )}
      </View>
    </View>
  );
};

export default SwipeToCheckOut;
