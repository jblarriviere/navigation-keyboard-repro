import { NavigationProp } from "@react-navigation/native";
import { Button, View, StyleSheet } from "react-native";
import { StackNavigatorParamList } from "../App";

export const HomeScreen = ({
  navigation,
}: {
  navigation: NavigationProp<StackNavigatorParamList>;
}) => {
  return (
    <View style={styles.container}>
      <Button title="Go to Form" onPress={() => navigation.navigate("Form")} />
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
