import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { FontAwesome5, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Badge } from "react-native-elements";

const { width, height } = Dimensions.get("window");

const Sidebar = () => {
  const [active, setActive] = useState("dashboard"); // Default active item

  return (
    <View style={styles.sidebar}>
      {/* Top Icons */}
      <TouchableOpacity
        style={[styles.iconContainer, active === "dashboard" && styles.activeIcon]}
        onPress={() => setActive("dashboard")}
      >
        <FontAwesome5 name="th-large" size={20} color={active === "dashboard" ? "blue" : "white"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.iconContainer, active === "documents" && styles.activeIcon]}
        onPress={() => setActive("documents")}
      >
        <Feather name="file-text" size={20} color={active === "documents" ? "blue" : "white"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.iconContainer, active === "calendar" && styles.activeIcon]}
        onPress={() => setActive("calendar")}
      >
        <Feather name="calendar" size={20} color={active === "calendar" ? "blue" : "white"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.iconContainer, active === "share" && styles.activeIcon]}
        onPress={() => setActive("share")}
      >
        <Feather name="share-2" size={20} color={active === "share" ? "blue" : "white"} />
      </TouchableOpacity>

      {/* Notification Icon with Badge */}
      <TouchableOpacity
        style={[styles.iconContainer, active === "clock" && styles.activeIcon]}
        onPress={() => setActive("clock")}
      >
        <Feather name="clock" size={20} color={active === "clock" ? "blue" : "white"} />
        <Badge value="3" status="error" containerStyle={styles.badge} />
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Bottom Icons */}
      <TouchableOpacity
        style={[styles.iconContainer, active === "alert" && styles.activeIcon]}
        onPress={() => setActive("alert")}
      >
        <MaterialCommunityIcons name="alert-circle-outline" size={22} color={active === "alert" ? "red" : "white"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.iconContainer, active === "settings" && styles.activeIcon]}
        onPress={() => setActive("settings")}
      >
        <Feather name="settings" size={20} color={active === "settings" ? "blue" : "white"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.iconContainer, active === "refresh" && styles.activeIcon]}
        onPress={() => setActive("refresh")}
      >
        <Feather name="refresh-cw" size={20} color={active === "refresh" ? "blue" : "white"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.iconContainer, active === "logout" && styles.activeIcon]}
        onPress={() => setActive("logout")}
      >
        <Feather name="log-out" size={20} color={active === "logout" ? "orange" : "white"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width * 0.05,
    height: height,
    backgroundColor: "#000",
    paddingVertical: 20,
    alignItems: "center",
    borderRightWidth: 2, // Added red border at the bottom
    borderRightColor: "#1E1E1E", // Red color for the border
  },
  iconContainer: {
    marginVertical: 15,
    padding: 10,
    borderRadius: 10,
  },
  activeIcon: {
    backgroundColor: "#1E1E1E", // Change background for active item
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
  },
  divider: {
    width: "60%",
    height: 1,
    backgroundColor: "#444",
    marginVertical: 20,
  },
});

export default Sidebar;