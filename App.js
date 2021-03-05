import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getDecks, getDeck } from './utils/api'

export default function App() {
  const [data, setData] = useState('test')
  useEffect(() => {
    getDecks().then(result => {
      console.log(result)
      setData(result)
    })
  }, [])
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(data)}</Text>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
