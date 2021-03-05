import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { black, lightGray, white } from '../utils/colors'
import TouchButton from './common/TouchButton'

const AddDeck = () => {
  const initialState = ''
  const [deckTitle, setDeckTitle] = useState(initialState)

  const handleDeckTitle = title => {
    setDeckTitle(title)
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.h1}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.textInput}
          value={deckTitle}
          onChangeText={handleDeckTitle}
          placeholder='Deck Title'
        />
      </View>
      <View>
        <TouchButton onPress={() => console.log('deck added')}>
          Create Deck
        </TouchButton>
      </View>
    </View>
  )
}

export default AddDeck

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  h1: {
    color: black,
    textAlign: 'center',
    fontSize: 32,
    margin: 5,
  },
  textInput: {
    backgroundColor: white,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    margin: 16,
  },
})
