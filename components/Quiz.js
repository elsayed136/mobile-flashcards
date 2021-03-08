import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'

import { black, green, lightPurp, red } from '../utils/colors'
import TextButton from './common/TextButton'
import TouchButton from './common/TouchButton'

import { clearLocalNotification, setLocalNotification } from '../utils/helper'

const answer = {
  CORRECT: 'CORRECT',
  INCORRECT: 'INCORRECT',
}
const Quiz = ({ deck, navigation }) => {
  const { length: questionsLength } = deck.questions

  const [isQuestion, setIsQuestion] = useState(true)
  const [questionNumber, setQuestionNumber] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [Incorrect, setIncorrect] = useState(0)

  useEffect(() => {
    clearLocalNotification().then(setLocalNotification)
  }, [])

  const handleAnswer = userAnswer => {
    setQuestionNumber(questionNumber + 1)
    setIsQuestion(true)
    if (userAnswer === answer.CORRECT) {
      setCorrect(correct + 1)
    } else {
      setIncorrect(Incorrect + 1)
    }
  }
  const handleReset = () => {
    setQuestionNumber(0)
    setCorrect(0)
    setIncorrect(0)
    setIsQuestion(true)
  }

  if (questionsLength === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[styles.count, { textAlign: 'center', padding: 5 }]}>
          Sorry, You cannot take a quiz because there are no cards in the deck.
        </Text>
      </View>
    )
  }

  if (questionNumber >= questionsLength) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: 'space-around', alignItems: 'center' },
        ]}
      >
        <View>
          <Text style={styles.h1}>Quiz Complete!</Text>
        </View>
        <View>
          <Text style={[styles.count, { textAlign: 'center' }]}>
            Percentage correct
          </Text>
          <Text style={{ color: 'red', fontSize: 46, textAlign: 'center' }}>
            {((correct / questionsLength) * 100).toFixed()}%
          </Text>
        </View>
        <View>
          <TouchButton
            btnStyle={{ backgroundColor: lightPurp, borderWidth: 0 }}
            onPress={handleReset}
          >
            Reset Quiz
          </TouchButton>
          <TextButton
            txtStyle={{ fontWeight: 'bold' }}
            onPress={navigation.goBack}
          >
            Go to Deck
          </TextButton>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.count}>
          {questionNumber + 1} / {deck.questions.length}
        </Text>
      </View>
      <View>
        <Text style={styles.h1}>
          {isQuestion
            ? deck.questions[questionNumber].question
            : deck.questions[questionNumber].answer}
        </Text>
        <TextButton
          txtStyle={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}
          onPress={() => setIsQuestion(!isQuestion)}
        >
          {isQuestion ? 'Answer' : 'Question'}
        </TextButton>
      </View>

      <View>
        <TouchButton
          btnStyle={{ backgroundColor: green, borderColor: green }}
          onPress={() => handleAnswer(answer.CORRECT)}
        >
          Correct
        </TouchButton>
        <TouchButton
          btnStyle={{
            backgroundColor: red,
            borderColor: red,
          }}
          onPress={() => handleAnswer(answer.INCORRECT)}
        >
          Incorrect
        </TouchButton>
      </View>
    </View>
  )
}
const mapStateToProps = ({ decks }, { route }) => {
  const deckId = route.params?.deckId ?? undefined
  const deck = decks[deckId]
  return {
    deck,
  }
}

export default connect(mapStateToProps)(Quiz)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  count: {
    fontSize: 24,
    color: black,
    textAlign: 'left',
  },
  h1: {
    fontSize: 43,
    color: black,
    textAlign: 'center',
  },
})
