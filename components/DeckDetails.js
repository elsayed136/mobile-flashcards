import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TouchButton from './common/TouchButton'
import Deck from './Deck'
import { white, black, red } from '../utils/colors'
import TextButton from './common/TextButton'

const DeckDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Deck />
      <View>
        <TouchButton
          btnStyle={{ backgroundColor: white }}
          txtStyle={{ color: black }}
          onPress={() => navigation.navigate('AddCard')}
        >
          Add Card
        </TouchButton>
        <TouchButton
          btnStyle={{ backgroundColor: black }}
          txtStyle={{ color: white }}
          onPress={() => navigation.navigate('Quiz')}
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
