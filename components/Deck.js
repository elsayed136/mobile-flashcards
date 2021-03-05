import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { black } from '../utils/colors'

const Deck = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Deck 1</Text>
      </View>
      <View>
        <Text style={styles.paragraph}>3 cards</Text>
      </View>
    </View>
  )
}

export default Deck

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
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
