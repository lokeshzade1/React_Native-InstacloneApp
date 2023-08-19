import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
const Post = (props) => {
  return (
    <>
      <ScrollView>
        <View className='mt-10'>
          <View className='w-full p-2'>
            <View className='w-full flex justify-between flex-row py-2 '>
              <Text className='text-2xl font-medium'>Instagram</Text>
              <View className=' flex  gap-6 flex-row'>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Notification')}
                >
                  <AntDesign name='hearto' size={30} color={'black'} />
                </TouchableOpacity>
                <Entypo name='chat' size={30} color={'black'} />
              </View>
            </View>
            <View>
              <ScrollView
                horizontal={true}
                contentContainerStyle={{
                  flexGrow: 1,
                  gap: 8,
                }}
                showsHorizontalScrollIndicator={false}
              >
                <View className='flex  items-center'>
                  <View className='h-20 w-20 rounded-full border-[0.5px] border-black '></View>
                  <Text className='font-medium'>Your Story</Text>
                </View>
                <View className='flex  items-center'>
                  <View className='h-20 w-20 rounded-full bg-black'></View>
                  <Text className='font-medium'>Your Story</Text>
                </View>
                <View className='flex  items-center'>
                  <View className='h-20 w-20 rounded-full bg-black'></View>
                  <Text className='font-medium'>Your Story</Text>
                </View>
                <View className='flex  items-center'>
                  <View className='h-20 w-20 rounded-full bg-black'></View>
                  <Text className='font-medium'>Your Story</Text>
                </View>
                <View className='flex  items-center'>
                  <View className='h-20 w-20 rounded-full bg-black'></View>
                  <Text className='font-medium'>Your Story</Text>
                </View>
              </ScrollView>
            </View>
          </View>
          <View className='flex gap-2  w-full'>
            <View className='  w-full py-2 flex'>
              {/* Nav Bar section */}
              <View className='px-3 flex justify-between w-full flex-row mb-2'>
                <View className='flex justify-center items-center gap-2 flex-row'>
                  <View className='border-[0.5px] border-black h-10 w-10 rounded-full'></View>
                  <Text className='font-medium'>LOKESH</Text>
                </View>

                <View className='flex justify-center items-center '>
                  <Entypo
                    name='dots-three-vertical'
                    size={20}
                    color={'black'}
                  />
                </View>
              </View>
              {/* image Section */}
              <View>
                <Image
                  source={{
                    uri: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=600',
                  }}
                  className='h-72 w-full'
                />
              </View>
              {/* likes Section */}
              <View className='flex flex-row justify-between mt-2 px-4'>
                <View className='flex flex-row justify-between gap-4'>
                  <AntDesign name='hearto' size={24} color={'black'} />
                  <Fontisto name='hipchat' size={24} color={'black'} />
                  <Feather name='send' size={24} color={'black'} />
                </View>
                <View>
                  <AntDesign name='save' size={24} color={'black'} />
                </View>
              </View>
              {/* DESCRIPTION */}
              <View className='px-4'>
                <Text className='font-semibold'>Likes</Text>
                <View>
                  <Text className='font-semibold'>UserName</Text>
                </View>
                <Text className='text-sm text-gray-500'>View all comment</Text>
                <Text className='text-[10px] text-gray-500'>1 hours ago</Text>
              </View>
            </View>
            <View className='border-[0.5px] border-black h-96 w-full'></View>
            <View className='border-[0.5px] border-black h-96 w-full'></View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default Post;
