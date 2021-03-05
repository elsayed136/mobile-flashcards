import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TouchButton from './common/TouchButton'
import Deck from './Deck'
import { white, black, red } from '../utils/colors'
import TextButton from './common/TextButton'

const DeckDetails = () => {
  return (
    <View style={styles.container}>
      <Deck />
      <View>
        <TouchButton
          btnStyle={{ backgroundColor: white }}
          txtStyle={{ color: black }}
          onPress={() => console.log('pressed')}
        >
          Add Card
        </TouchButton>
        <TouchButton
          btnStyle={{ backgroundColor: black }}
          txtStyle={{ color: white }}
          onPress={() => console.log('pressed')}
        >
          Start Quiz
        </TouchButton>
        <TextButton
          txtStyle={{ color: red }}
          onPress={() => console.log('pressed')}
        >
          Delete Deck
        </TextButton>
      </View>
    </View>
  )
}

export default DeckDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 16,
  },
})
