import HomePage from './homepage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Post from './Post';
import PostpageNavigation from './PostpageNavigation';
const Activity = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name='Post'
          component={Post}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Notification' component={PostpageNavigation} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </>
  );
};

export default Activity;
