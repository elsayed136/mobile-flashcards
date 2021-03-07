import React from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import Deck from './Deck'

const DecksList = ({ navigation }) => {
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DeckDetails', {
            title: 'Deck1',
          })
        }
      >
        <Deck />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('DeckDetails')}>
        <Deck />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DeckDetails', {
            title: 'Deck3',
          })
        }
      >
        <Deck />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DeckDetails', {
            title: 'Deck4',
          })
        }
      >
        <Deck />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DeckDetails', {
            title: 'Deck5',
          })
        }
      >
        <Deck />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default DecksList
