import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { black, green, lightGray, red } from '../utils/colors'
import TextButton from './common/TextButton'
import TouchButton from './common/TouchButton'

const QUESTION = 'QUESTION'
const ANSWER = 'ANSWER'
const RESULT = 'RESULT'

const Quiz = () => {
  const initialState = QUESTION
  const [screen, setScreen] = useState(initialState)
  if (screen === RESULT) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <View>
          <Text style={styles.h1}>Quiz Complete!</Text>
        </View>
        <View>
          <Text style={[styles.count, { textAlign: 'center' }]}>
            Percentage correct
          </Text>
        </View>
        <View>
          <Text style={{ color: 'red', fontSize: 46, textAlign: 'center' }}>
            87%
          </Text>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.count}>2 / 2</Text>
      </View>
      <View>
        <Text style={styles.h1}>
          {screen === QUESTION
            ? 'Does React Native work with Android?'
            : 'Yes!'}
        </Text>
        <TextButton
          txtStyle={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}
          onPress={() => console.log('pressed')}
        >
          {screen === QUESTION ? 'Answer' : 'Question'}
        </TextButton>
      </View>

      <View>
        <TouchButton
          btnStyle={{ backgroundColor: green, borderColor: green }}
          onPress={() => console.log('pressed')}
        >
          Correct
        </TouchButton>
        <TouchButton
          btnStyle={{
            backgroundColor: red,
            borderColor: red,
          }}
          onPress={() => console.log('pressed')}
        >
          Incorrect
        </TouchButton>
      </View>
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  count: {
    fontSize: 24,
    color: black,
    alignSelf: 'flex-start',
  },
  h1: {
    fontSize: 43,
    color: black,
    textAlign: 'center',
  },
})
