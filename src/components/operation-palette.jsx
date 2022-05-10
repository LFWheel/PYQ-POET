import { View,Text } from '@tarojs/components'
import './operation-palette.scss'
export default function OperationPalette() {
  return <View className='palette-container'>
    <View className='palette-top'>
      <View>
        <Text>Color</Text>
      </View>
      <View>
        <Text>Card</Text>
      </View>
      <View>
        <Text>Size</Text>
      </View>
    </View>
    <View className='palette-bottom'>
      <View>
        <Text>Copy</Text>
      </View>
      <View>
        <Text>Download</Text>
      </View>
    </View>
  </View>
}