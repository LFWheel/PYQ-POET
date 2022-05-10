import { View, Text } from '@tarojs/components'
import './index.scss'
import InputComponent from '../../components/input-component'
import PostCard from '../../components/post-card'
import OperationPalette from '../../components/operation-palette'
export default function Index() {
  return (
    <View className='index'>
      <InputComponent/>
      <PostCard/>
      <OperationPalette/>
    </View>
  )
}
