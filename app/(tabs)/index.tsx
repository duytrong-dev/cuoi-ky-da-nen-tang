import { Redirect } from "expo-router";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.text}>Hello Home!</Text>
    // </View>
    <Redirect href="/login" />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
  },
});
