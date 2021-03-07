import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addCardToDeck } from '../actions'

import TouchButton from '../components/common/TouchButton'
import { black, lightGray, white } from '../utils/colors'

const AddCard = ({ deckId, addCardToDeck, navigation }) => {
  const initialState = {
    question: '',
    answer: '',
  }
  const [card, setCard] = useState(initialState)

  const handleQuestion = question => {
    setCard(currentState => {
      return {
        ...currentState,
        question,
      }
    })
  }
  const handleAnswer = answer => {
    setCard(currentState => {
      return {
        ...currentState,
        answer,
      }
    })
  }
  const handleSubmit = () => {
    if (!card.question.trim() || !card.answer.trim())
      return alert('Enter Question and Answer')
    addCardToDeck(deckId, card)
    setCard(initialState)
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.textInput}
          value={card.question}
          onChangeText={handleQuestion}
          placeholder='Questions'
        />
        <TextInput
          style={styles.textInput}
          value={card.answer}
          onChangeText={handleAnswer}
          placeholder='Answer'
        />
      </View>
      <View>
        <TouchButton onPress={handleSubmit}>Submit</TouchButton>
      </View>
    </View>
  )
}

const mapStateToProps = (state, { route }) => {
  const deckId = route.params?.deckId ?? undefined

  return {
    deckId,
  }
}

const mapDispatchToProps = {
  addCardToDeck,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
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
