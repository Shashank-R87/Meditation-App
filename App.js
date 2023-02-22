import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    PoppinsSemiBold: require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    PoppinsBlack: require("./assets/fonts/Poppins/Poppins-Black.ttf"),
    PoppinsMediumItalic: require("./assets/fonts/Poppins/Poppins-MediumItalic.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
