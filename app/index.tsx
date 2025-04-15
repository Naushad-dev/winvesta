import { Text, View } from "react-native";
import {CustomText} from "../components/index"
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <CustomText>This is Index</CustomText>
    </View>
  );
}
