import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
     <Text style={{color:"#000000", fontSize: 30, fontWeight:800}}>This is Home Page</Text>
     <Link href={"/about"}>Go to About Page</Link>
    </View>
  );
}
