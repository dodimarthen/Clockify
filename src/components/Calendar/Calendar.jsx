import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

// Function to get the days in a month
const getDaysInMonth = (month, year) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push({
      date: date.getDate().toString().padStart(2, "0"),
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
    });
    date.setDate(date.getDate() + 1);
  }
  return days;
};

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = React.useState("09");

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const dates = getDaysInMonth(currentMonth, currentYear);

  const renderDateItem = ({ item }) => {
    const isSelected = item.date === selectedDate;

    return (
      <TouchableOpacity
        onPress={() => setSelectedDate(item.date)}
        style={{
          backgroundColor: isSelected ? "#007bff" : "#fff",
          borderRadius: 14,
          width: 72,
          height: 72,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 2,
          padding: 4,
        }}
      >
        <Text
          style={{ color: isSelected ? "#fff" : "#000", fontWeight: "100" }}
        >
          {item.date}
        </Text>
        <Text
          style={{
            color: isSelected ? "#fff" : "#000000FF",
            fontWeight: "800",
          }}
        >
          {item.day}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={dates}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.date}
        renderItem={renderDateItem}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
};

export default CalendarComponent;
