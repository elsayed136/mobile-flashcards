import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import TouchButton from '../components/common/TouchButton'
import { black, lightGray, white } from '../utils/colors'

const AddCard = () => {
  const initialState = {
    question: '',
    answer: '',
  }
  const [card, setcard] = useState(initialState)

  const handleQuestion = question => {
    setcard(currentState => {
      return {
        ...currentState,
        question,
      }
    })
  }
  const handleAnswer = answer => {
    setcard(currentState => {
      return {
        ...currentState,
        answer,
      }
    })
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
        <TouchButton onPress={() => console.log('card added')}>
          Submit
        </TouchButton>
      </View>
    </View>
  )
}

export default AddCard

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
