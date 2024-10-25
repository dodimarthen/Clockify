import React from "react";
import { Text } from "react-native";
import { Snackbar } from "react-native-paper";

const CustomSnackbar = ({ visible, onDismiss, message }) => {
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      duration={1000}
      style={{ backgroundColor: "red", marginBottom: 30 }}
      action={{
        label: "Close",
        onPress: onDismiss,
      }}
    >
      <Text style={{ color: "white" }}>{message}</Text>
    </Snackbar>
  );
};

export default CustomSnackbar;
