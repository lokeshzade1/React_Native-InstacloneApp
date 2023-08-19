import { StatusBar } from 'expo-status-bar';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
export default function App() {
  return (
    <View className='flex-1 mt-16'>
      <StatusBar />
      <View className='flex flex-row  justify-between items-center px-4 '>
        <View className='h-20 w-20 rounded-full bg-black'></View>
        <View className='flex justify-center items-center'>
          <Text className='font-bold text-xl'>18</Text>
          <Text className='font-bold text-sm'>Post</Text>
        </View>
        <View className='flex justify-center items-center'>
          <Text className='font-bold text-xl'>18</Text>
          <Text className='font-bold text-sm'>Followers</Text>
        </View>
        <View className='flex justify-center items-center'>
          <Text className='font-bold text-xl '>18</Text>
          <Text className='font-bold text-sm'>Following</Text>
        </View>
      </View>
      {/* Discription */}
      <View className='px-4 mt-3 '>
        <Text className='font-bold text-sm'>Discription</Text>
      </View>
      <View className='flex flex-row  justify-between px-4 gap-1'>
        <TouchableOpacity className='bg-gray-200 font-semibold flex-1 py-2 flex justify-center items-center rounded-lg'>
          <Text>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-gray-200 font-semibold flex-1 py-2 flex justify-center items-center rounded-lg'>
          <Text>Share profile</Text>
        </TouchableOpacity>
      </View>
      {/* story section  */}
      <View className='px-4 my-4'>
        <View className='h-20 w-20 border-[0.5px] border-black rounded-full flex justify-center items-center '>
          <Text>+</Text>
        </View>
      </View>
      {/* All posted poste */}

      <ScrollView
        stickyHeaderIndices={[1]}
        scrollEventThrottle={0}
        className='border-[0.5px] border-gray-300'
      >
        <View className='relative'>
          <View className='flex-1 py-4 border-[0.5px] border-gray-300 w-full  sticky justify-center items-center'>
            <Text>icon</Text>
          </View>

          <View className='flex flex-row flex-wrap gap-[3px] justify-center'>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
            <Text className='h-28 w-[32.30%]  border-[0.5px] border-black'></Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
