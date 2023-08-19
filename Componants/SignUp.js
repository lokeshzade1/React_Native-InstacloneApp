import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SignUp = (props) => {
  return (
    <>
      <View className='flex-1  justify-center items-center relative'>
        <View className='w-full px-4 justify-center items-center'>
          <View className='w-full py-6 justify-center items-center'>
            <AntDesign name='instagram' color={'red'} size={64} />
            <Text className='text-5xl font-medium'>Instagram</Text>
            <View className='text-lg font-medium flex justify-center items-center'>
              <Text className='text-lg text-gray-500'>
                Sign up to see Photos and Videos
              </Text>
              <Text className='text-lg text-gray-500'>from your friends</Text>
            </View>
          </View>
          <View className='w-full flex gap-4'>
            <TextInput
              className='border-[0.8px] border-gray-300 py-3 rounded px-3 bg-slate-50'
              placeholder='Phone number or Email address'
            ></TextInput>
            <TextInput
              className='border-[0.8px] border-gray-300 py-3 rounded px-3 bg-slate-50'
              placeholder='Full Name'
            ></TextInput>
            <TextInput
              className='border-[0.8px] border-gray-300 py-3 rounded px-3 bg-slate-50'
              placeholder='UserName'
            ></TextInput>
            <TextInput
              className='border-[0.8px] border-gray-300 py-3 rounded px-3 bg-slate-50'
              placeholder='password'
            ></TextInput>
          </View>
          <TouchableOpacity
            className='bg-blue-400 w-full py-4 rounded flex justify-center items-center mt-6'
            onPress={() => props.navigation.navigate('Login')}
          >
            <Text className='text-sm font-bold text-white'>Sign Up</Text>
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
      </View>
    </>
  );
};
export default SignUp;
