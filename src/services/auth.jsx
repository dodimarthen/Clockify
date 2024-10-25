import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getCurrentUser = async () => {
  try {
    const token = await AsyncStorage.getItem("token");

    if (!token) {
      console.error("No token found, unable to fetch current user");
      return null;
    }

    const response = await axios.get(
      `${process.env.EXPO_PUBLIC_API_URL}/api/users/current`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    if (response.data) {
      const username = response.data.data.username;
      const role = response.data.data.role;

      console.log(username, role);
      return { username, role };
    }
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
};

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
        email: email,
        password: password,
      }
    );

    if (response.data && response.data.data && response.data.data.token) {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.setItem("token", response.data.data.token);
      console.log(response.data.data.token);

      await getCurrentUser(navigation);

      navigation.navigate("Dashboard");
    } else {
      setLoginError("Invalid email or password.");
    }
  } catch (error) {
    setLoginError("Invalid email or password.");
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
