import React from 'react'
import { View } from 'react-native'
import CustomStatusBar from './components/common/CustomStatusBar'
import Navigator from './navigation'
import { lightGray } from './utils/colors'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <CustomStatusBar backgroundColor={lightGray} barStyle='light-content' />
      <Navigator />
    </View>
  )
}

export default App
