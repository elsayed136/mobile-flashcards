import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { removeDeck } from '../actions'

import Deck from './Deck'
import TouchButton from './common/TouchButton'
import TextButton from './common/TextButton'
import { white, black, red } from '../utils/colors'

const DeckDetails = ({ decks, deck, removeDeck, navigation }) => {
  const handleDeleteDeck = deckId => {
    removeDeck(deckId)
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <Deck deck={deck} />
      <View>
        <TouchButton
          btnStyle={{ backgroundColor: white }}
          txtStyle={{ color: black }}
          onPress={() => navigation.navigate('AddCard', { deckId: deck.title })}
        >
          Add Card
        </TouchButton>
        <TouchButton
          btnStyle={{ backgroundColor: black }}
          txtStyle={{ color: white }}
          onPress={() => navigation.navigate('Quiz', { deckId: deck.title })}
        >
          Start Quiz
        </TouchButton>
        <TextButton
          txtStyle={{ color: red }}
          onPress={() => handleDeleteDeck(deck.title)}
        >
          Delete Deck
        </TextButton>
      </View>
    </View>
  )
}
const mapStateToProps = ({ decks }, { route }) => {
  const title = route.params.title
  const deck = decks[title]

  return {
    decks,
    deck,
  }
}

const mapDispatchToProps = {
  removeDeck,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(DeckDetails))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 16,
  },
})
