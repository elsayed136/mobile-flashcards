import React, { useEffect } from 'react'
import { View, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { connect } from 'react-redux'
import Deck from './Deck'

import { handleInitialData } from '../actions'

const DecksList = ({ navigation, decks, handleInitialData }) => {
  useEffect(() => {
    handleInitialData()
  }, [])
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DeckDetails', {
            title: item.title,
            deckId: item.title,
          })
        }}
      >
        <Deck deckId={item.title} />
      </TouchableOpacity>
    )
  }
  return (
    <View>
      <FlatList
        data={Object.values(decks)}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </View>
  )
}

const mapStateToProps = ({ decks }) => ({ decks })

const mapDispatchToProps = {
  handleInitialData,
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksList)
