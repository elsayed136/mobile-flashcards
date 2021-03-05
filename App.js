import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DecksList from './components/DecksList'
import Deck from './components/Deck'
import AddDeck from './components/AddDeck'
import DeckDetails from './components/DeckDetails'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import APITest from './components/APITest'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Deck /> */}
      {/* <DecksList /> */}
      {/* <DeckDetails /> */}
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  txt: {
    color: 'red',
  },
})
