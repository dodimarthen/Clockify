import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const handleLogin = async (
  email,
  password,
  navigation,
  setLoading,
  setLoginError
) => {
  if (!email || !password) {
    setLoginError("Please enter your email and password.");
    return;
  }

  setLoading(true);
  try {
    const response = await axios.post(
      `${process.env.EXPO_PUBLIC_API_URL}/api/users/login`,
      {
        username: email,
        password: password,
      }
    );

    if (response.data && response.data.data && response.data.data.token) {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.setItem("token", response.data.data.token);
      navigation.navigate("Dashboard");
    } else {
      setLoginError("Invalid username or password.");
    }
  } catch (error) {
    setLoginError("Invalid username or password.");
  } finally {
    setLoading(false);
  }
};

export const handleLogout = async (navigation) => {
  try {
    await AsyncStorage.removeItem("token");
    navigation.navigate("LoginPage");
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
