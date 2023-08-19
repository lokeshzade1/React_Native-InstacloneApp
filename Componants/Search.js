import { ScrollView, TextInput, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';
const Search = () => {
  return (
    <>
      <View className='flex-1 mt-10'>
        <View className='mx-4 flex flex-row bg-gray-300 rounded-lg overflow-hidden'>
          <View className='bg-gray-300 py-2 flex justify-center items-center px-4'>
            <Ionicons name='search1' size={20} color={'gray'} />
          </View>
          <TextInput className=' w-full rounded py-2'></TextInput>
        </View>
        <View className='px-6  border-[0.5px] border-gray-300 mt-3'>
          <ScrollView>
            <View className='flex flex-row items-center gap-5 mt-2'>
              <View className='h-20 w-20 rounded-full bg-black'></View>
              <Text className='font-medium'>Name</Text>
            </View>
            <View className='flex flex-row items-center gap-5 mt-2'>
              <View className='h-20 w-20 rounded-full bg-black'></View>
              <Text className='font-medium'>Name</Text>
            </View>
            <View className='flex flex-row items-center gap-5 mt-2'>
              <View className='h-20 w-20 rounded-full bg-black'></View>
              <Text className='font-medium'>Name</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};
export default Search;
