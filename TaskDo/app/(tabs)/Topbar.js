import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, Dimensions } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons"; 
import { Avatar, Badge } from "react-native-elements"; 

const { width, height } = Dimensions.get("window");

const Topbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.topbar}>
      <Text style={styles.text}>Dashboard</Text>

      <View style={styles.container}>
        {/* Dark Mode Toggle */}
        <View style={styles.toggleContainer}>
          <Feather name="moon" color="white" size={25} />
         
          <Feather name="sun" color="white" size={25} />
        </View>

        {/* Notification Icon */}
        <View style={styles.notificationContainer}>
          <Feather name="bell" color="white" size={25} />
          <Badge
            value="13"
            status="error"
            containerStyle={styles.badgeStyle}
          />
        </View>

        {/* Profile Avatar */}
        <View style={styles.profileContainer}>
          <Avatar
            rounded
            source={{ uri: "https://your-profile-image-url.com" }}
            size="medium"
          />
          <View style={styles.onlineIndicator} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topbar: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    marginLeft:104,
    width: width,
    height: height * 0.07,
    backgroundColor: "#000",
    paddingLeft: 20,
    elevation: 10,
    alignItems: "center",
    borderBottomWidth: 2, // Added red border at the bottom
    borderBottomColor: "#1E1E1E", // Red color for the border
  },
  text: {
    color: "white",
    fontSize: 30,
  },
  container: {
    position: "absolute",
    right:120,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
    width: width * 0.10,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#171717",
    marginHorizontal: 5, // Fix for gap issue
    borderRadius: 100,
    width: 75,
    height: 50,
    padding: 5,
  },
  notificationContainer: {
    position: "relative",
    backgroundColor: "#171717",
    borderRadius: 100,
    padding: 10,
  },
  badgeStyle: {
    position: "absolute",
    top: -5,
    right: -5,
  },
  profileContainer: {
    position: "relative",
    
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "green",
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#000",
  },
});

export default Topbar;