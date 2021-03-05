import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {
  getDecks,
  getDeck,
  saveDeckTitle,
  addCardToDeck,
  resetDecks,
} from '../utils/api'

const APITest = () => {
  const [data, setData] = useState('APITest')
  useEffect(() => {
    handleGetDecks()
  }, [])

  const handleGetDecks = () => getDecks().then(result => setData(result))
  const handleGetDeck = () => {
    getDeck('Redux').then(result => setData(result))
  }
  const handleSaveDeck = () => saveDeckTitle('Redux')

  const handleAddCard = () =>
    addCardToDeck('Redux', {
      question: 'What is React?',
      answer: 'A library for managing user interfaces',
    })
  const handleResetDecks = () => resetDecks()

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={handleGetDecks}>
          <Text style={styles.btnText}>Get Decks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleResetDecks}>
          <Text style={styles.btnText}>Reset Decks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleGetDeck}>
          <Text style={styles.btnText}>Get Deck</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleSaveDeck}>
          <Text style={styles.btnText}>Add Deck</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleAddCard}>
          <Text style={styles.btnText}>Add Card</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ margin: 30 }}>{JSON.stringify(data)}</Text>
    </View>
  )
}

export default APITest

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  btn: {
    width: 100,
    height: 50,
    backgroundColor: 'purple',
    borderRadius: 5,
    justifyContent: `center`,
    alignItems: `center`,
    margin: 10,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
})
