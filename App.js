import React, { useEffect } from 'react'
import { View } from 'react-native'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

import CustomStatusBar from './components/common/CustomStatusBar'
import Navigator from './navigation'
import { lightGray } from './utils/colors'

import { setLocalNotification } from './utils/helper'

const store = createStore(reducer, applyMiddleware(thunk))

const App = () => {
  useEffect(() => {
    setLocalNotification()
  }, [])
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <CustomStatusBar backgroundColor={lightGray} barStyle='light-content' />
        <Navigator />
      </View>
    </Provider>
  )
}

export default App
