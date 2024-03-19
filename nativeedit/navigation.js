import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Image } from "react-native";
import Frontpg from "./Frontpg.js";
import UserProfileScreen from "./UserProfileScreen.js";

const Stack = createStackNavigator();

const renderLeftHeader = (navigation) => {
  // Implement your Accordion component here (refer to Accordion libraries)
  // For example, using react-native-collapsible
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
      {/* Your Accordion UI here */}
    </TouchableOpacity>
  );
};

const renderRightHeader = (navigation) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
      {
        //YEah
      }
    </TouchableOpacity>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Frontpg}
        options={({ navigation }) => ({
          title: "Marketz",
          headerLeft: () => renderLeftHeader(navigation),
          headerRight: () => renderRightHeader(navigation),
        })}
      />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
