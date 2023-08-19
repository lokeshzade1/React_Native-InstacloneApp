import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Login';
import Profile from './Profile';
import Ionicons from 'react-native-vector-icons/AntDesign';
import Post from './Post';
import Search from './Search';
import UploadFile from './UploadFile';

import Activity from './Activity';
const HomePage = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Setting') {
              iconName = focused ? 'search1' : 'search1';
            } else if (route.name === 'Search') {
              iconName = focused ? 'pluscircleo' : 'pluscircleo';
            } else if (route.name === 'Reels') {
              iconName = focused ? 'caretright' : 'caretright';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'caretright' : 'caretright';
              return (
                <View className='bg-slate-200 h-[27px] w-[27px] rounded-full'></View>
              );
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
        })}
      >
        <Tab.Screen name='Home' component={Activity} />
        <Tab.Screen name='Setting' component={Search} />
        <Tab.Screen name='Search' component={UploadFile} />
        <Tab.Screen name='Reels' component={Login} />
        <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
    </>
  );
};

export default HomePage;
