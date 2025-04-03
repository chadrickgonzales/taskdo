import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router"; // ✅ Import router

const NewPage = () => {
  const router = useRouter(); // ✅ Get navigation function

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Welcome to the New Page</Text>

      {/* ✅ Button to go back */}
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
};

export default NewPage;
