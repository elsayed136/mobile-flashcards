import React, { useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { handleAddCardToDeck } from '../actions'

import TouchButton from '../components/common/TouchButton'
import { white } from '../utils/colors'

const AddCard = ({ deckId, handleAddCardToDeck, navigation }) => {
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
    handleAddCardToDeck(deckId, card)
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
  const { deckId } = route.params

  return {
    deckId,
  }
}

const mapDispatchToProps = {
  handleAddCardToDeck,
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
