import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import Quiz from './components/Quiz'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Quiz />
      <StatusBar style='auto' />
    </View>
  )
}
