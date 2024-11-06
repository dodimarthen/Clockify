import React from "react";
import { Modal, View, Text, Image, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

const CheckModal = ({ visible, onClose, text, children, image }) => {
  const [fontsLoaded] = useFonts({
    Roboto: require("../../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="medium" color="#0000ff" />;
  }

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          {/* Use NativeWind Tailwind classes for messageText */}
          <Text className="text-center text-xl text-[#191717] font-bold mb-2">
            {text}
          </Text>
          <Image source={image} style={styles.image} />
          {/* Display children message with NativeWind */}
          <Text className="text-center text-xl text-[#191717] font-bold mb-2">
            {children}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 320,
    padding: 20,
    backgroundColor: "#F5F5F7",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginHorizontal: 20,
  },
  image: {
    width: 260,
    height: 220,
    marginBottom: 20,
  },
};

export default CheckModal;
