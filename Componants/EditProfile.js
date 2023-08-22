import { View, Text } from 'react-native';
const EditProfile = () => {
  return (
    <View className='flex-1'>
      {/* <View>
        <Text>Edit Profile</Text>
        <Text>ok</Text>
      </View> */}
      <View className='justify-center items-center py-10'>
        <View className='border-[0.5px] border-gray-400 h-20 w-20 rounded-full'></View>
        <View>
          <Text className='text-blue-400 font-semibold'>
            Edit picture or avatar
          </Text>
        </View>
      </View>
      <View className='px-4'>
        <View>
          <Text className='text-gray-500'>Name</Text>
          <View className='w-full   border-b-[1px] border-gray-400  py-3 '>
            <Text className=' text-[17px]'>Lokesh</Text>
          </View>
        </View>
        <View className='mt-3'>
          <Text className='text-gray-500'>Username</Text>
          <View className='w-full   border-b-[1px] border-gray-400  py-3 '>
            <Text className=' text-[17px]'>Lokesh</Text>
          </View>
        </View>
        <View className='mt-3'>
          <Text className='text-gray-500'>Pronounce</Text>
          <View className='w-full   border-b-[1px] border-gray-400  py-3 '>
            <Text className=' text-[17px]'>Lokesh</Text>
          </View>
        </View>
        <View className='mt-3'>
          <Text className='text-gray-500'>Bio</Text>
          <View className='w-full   border-b-[1px] border-gray-400  py-3 '>
            <Text className=' text-[17px]'>Lokesh</Text>
          </View>
        </View>
        <View className='mt-3'>
          <Text className='text-gray-500'>Gender</Text>
          <View className='w-full   border-b-[1px] border-gray-400  py-3 '>
            <Text className=' text-[17px]'>Male</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default EditProfile;
