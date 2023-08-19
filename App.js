import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Componants/Profile';
import Login from './Componants/Login';
import HomePage from './Componants/homepage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './Componants/SignUp';
import Activity from './Componants/Activity';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      {/* <Profile /> */}

      {/* <HomePage /> */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='HomePage' component={HomePage} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='Activity' component={Activity} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
