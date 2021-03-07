import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions'
import { black, white } from '../utils/colors'
import TouchButton from './common/TouchButton'

const AddDeck = ({ navigation, handleAddDeck }) => {
  const initialState = ''
  const [deckTitle, setDeckTitle] = useState(initialState)

  const handleDeckTitle = title => {
    setDeckTitle(title)
  }
  const handleCreateDeck = () => {
    if (!deckTitle.trim()) {
      alert('Enter A Title')
    } else {
      handleAddDeck(deckTitle)
      setDeckTitle('')
      navigation.goBack()
    }
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
        <TouchButton onPress={handleCreateDeck}>Create Deck</TouchButton>
      </View>
    </View>
  )
}

const mapStateToProps = null

const mapDispatchToProps = {
  handleAddDeck,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck)

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
