import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { black } from '../utils/colors'

const Deck = ({ deck }) => {
  if (deck === undefined) {
    return <View style={styles.container} />
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{deck.title}</Text>
      </View>
      <View>
        <Text style={styles.paragraph}>{deck.questions.length} cards</Text>
      </View>
    </View>
  )
}

export default Deck

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1,
    height: 100,
    marginVertical: 10,
  },
  title: {
    fontSize: 28,
    color: black,
  },
  paragraph: {
    color: 'gray',
  },
})
