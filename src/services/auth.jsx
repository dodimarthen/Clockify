import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return null;
    }
    return token;
  } catch (error) {
    console.error("Error getting token:", error);
    return null;
  }
};

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

      console.log("Fetched user role:", role);
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

      const user = await getCurrentUser();

      if (user) {
        console.log("User role:", user.role);

        if (
          user.role.toLowerCase() === "admin" ||
          user.role.toLowerCase() === "administrator"
        ) {
          navigation.navigate("AdminPanel");
        } else {
          navigation.navigate("UserPanel");
        }
      } else {
        setLoginError("Unable to fetch user details.");
      }
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
    const token = await AsyncStorage.getItem("token");

    if (!token) {
      console.log("No token found during logout");
      return;
    }

    const response = await axios.delete(
      `${process.env.EXPO_PUBLIC_API_URL}/api/users/logout`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    if (response.status === 200) {
      await AsyncStorage.removeItem("token");
      navigation.navigate("LoginPage");
    }
  } catch (error) {}
};
