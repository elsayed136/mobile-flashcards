import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { handleRemoveDeck } from '../actions'

import Deck from './Deck'
import TouchButton from './common/TouchButton'
import TextButton from './common/TextButton'
import { white, black, red } from '../utils/colors'

const DeckDetails = ({ deckId, handleRemoveDeck, navigation }) => {
  const handleDeleteDeck = deckId => {
    handleRemoveDeck(deckId)
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <Deck deckId={deckId} />
      <View>
        <TouchButton
          btnStyle={{ backgroundColor: white }}
          txtStyle={{ color: black }}
          onPress={() => navigation.navigate('AddCard', { deckId })}
        >
          Add Card
        </TouchButton>
        <TouchButton
          btnStyle={{ backgroundColor: black }}
          txtStyle={{ color: white }}
          onPress={() => navigation.navigate('Quiz', { deckId })}
        >
          Start Quiz
        </TouchButton>
        <TextButton
          txtStyle={{ color: red }}
          onPress={() => handleDeleteDeck(deckId)}
        >
          Delete Deck
        </TextButton>
      </View>
    </View>
  )
}
const mapStateToProps = ({ decks }, { route }) => {
  const { deckId } = route.params

  return {
    deckId,
  }
}

const mapDispatchToProps = {
  handleRemoveDeck,
}
export default connect(mapStateToProps, mapDispatchToProps)(DeckDetails)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 16,
  },
})
