import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Image } from "react-native";
import Frontpg from "./Frontpg.js";
import UserProfileScreen from "./UserProfileScreen.js";
import food1 from "./assets/person.png";

const Stack = createStackNavigator();

const renderLeftHeader = (navigation) => {
  // Possible accordion menu here
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
      {}
    </TouchableOpacity>
  );
};

const renderRightHeader = (navigation) => {
  // Render clickable user profile pic
  return (
    <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
      <Image source={food1} className="h-10 w-10 m-2 rounded-full" />
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
