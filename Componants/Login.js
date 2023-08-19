import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Login = (props) => {
  return (
    <>
      <View className='flex-1  justify-center items-center relative'>
        <View className='w-full px-4 justify-center items-center'>
          <View className='w-full py-6 justify-center items-center'>
            <AntDesign name='instagram' color={'red'} size={64} />
            <Text className='text-5xl font-medium'>Instagram</Text>
          </View>
          <View className='w-full flex gap-4'>
            <TextInput
              className='border-[0.8px] border-gray-300 py-3 rounded px-3 bg-slate-50'
              placeholder='Phone number,usernmame or email address'
            ></TextInput>
            <TextInput
              className='border-[0.8px] border-gray-300 py-3 rounded px-3 bg-slate-50'
              placeholder='password'
            ></TextInput>
            <TouchableOpacity className='flex  items-end'>
              <Text className='text-sm font-medium text-blue-400'>
                Forgotten Password ?
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            className='bg-blue-400 w-full py-4 rounded flex justify-center items-center mt-6'
            onPress={() => props.navigation.navigate('HomePage')}
          >
            <Text className='text-sm font-bold text-white'>Log In</Text>
          </TouchableOpacity>
          <View className='flex w-full flex-row items-center gap-3 mt-5'>
            <View className='bg-slate-300 h-[2px] flex-1 rounded'></View>
            <View>
              <Text className='text-slate-400 font-medium'>OR</Text>
            </View>
            <View className='bg-slate-300 h-[2px] flex-1 rounded'></View>
          </View>

          <TouchableOpacity className='mt-6 flex flex-row items-center gap-2'>
            <AntDesign name='facebook-square' color={'blue'} size={22} />
            <Text className='text-sm font-medium text-blue-400 py-2'>
              Login with Facebook
            </Text>
          </TouchableOpacity>
        </View>
        <View className='  border-[1px] border-t-slate-300  border-b-white  border-l-white  border-r-white w-full flex   py-4 flex-row justify-center absolute bottom-0'>
          <Text className='text-slate-400'> Dont have an Account ? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text className='text-sm font-medium text-blue-400'>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default Login;
