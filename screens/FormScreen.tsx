import { View, StyleSheet, TextInput } from "react-native";

export const FormScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput autoFocus={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
