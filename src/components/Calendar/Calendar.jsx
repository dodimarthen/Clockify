import React, { useCallback } from "react";
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

// Memoized version of the date item component
const DateItem = React.memo(({ item, isSelected, onPress }) => (
  <TouchableOpacity
    onPress={() => onPress(item.date)}
    style={{
      backgroundColor: isSelected ? "#007bff" : "#fff",
      borderRadius: 14, // Rounded corners
      width: 72,
      height: 72,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 3,
      padding: 4,
      borderWidth: 1,
      borderColor: isSelected ? "#007bff" : "#F5F5F5",
      shadowOffset: { width: 0, height: 2 },
    }}
  >
    <Text style={{ color: isSelected ? "#fff" : "#000", fontWeight: "100" }}>
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
));

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = React.useState("01");

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const dates = getDaysInMonth(currentMonth, currentYear);

  // Use useCallback to memoize the function
  const handlePress = useCallback((date) => {
    setSelectedDate(date);
  }, []);

  const renderDateItem = useCallback(
    ({ item }) => {
      const isSelected = item.date === selectedDate;
      return (
        <DateItem item={item} isSelected={isSelected} onPress={handlePress} />
      );
    },
    [selectedDate, handlePress]
  );

  return (
    <View>
      <FlatList
        removeClippedSubviews={true}
        data={dates}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.date}
        renderItem={renderDateItem}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        initialNumToRender={4}
        maxToRenderPerBatch={10}
        getItemLayout={(data, index) => ({
          length: 84,
          offset: 84 * index,
          index,
        })}
      />
    </View>
  );
};

export default CalendarComponent;
