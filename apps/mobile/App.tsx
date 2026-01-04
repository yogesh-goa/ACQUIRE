import { View, Text, Pressable } from "react-native";

export default function Entry() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F8FAFC",
      padding: 24
    }}>
      <Text style={{ fontSize: 32, fontWeight: "600", marginBottom: 12 }}>
        ACQUIRE OS
      </Text>

      <Text style={{ fontSize: 16, color: "#475569", textAlign: "center" }}>
        Self & Situational Awareness
      </Text>

      <Text style={{ marginTop: 24, fontSize: 16, textAlign: "center" }}>
        Log reality{"\n"}without losing yourself
      </Text>

      <Pressable style={{
        marginTop: 32,
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: "#0F172A",
        borderRadius: 8
      }}>
        <Text style={{ color: "#FFF" }}>Enter</Text>
      </Pressable>
    </View>
  );
}
