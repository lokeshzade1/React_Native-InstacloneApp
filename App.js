import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Componants/Profile';
import Login from './Componants/Login';
import HomePage from './Componants/homepage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './Componants/SignUp';
import Activity from './Componants/Activity';
import EditProfile from './Componants/EditProfile';
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
          <Stack.Screen
            name='Editprofile'
            component={EditProfile}
            options={{
              headerShown: true,
              headerRight: () => (
                <Text className='text-lg font-bold pr-3'>X</Text>
              ),
              title: 'Edit Profile',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
