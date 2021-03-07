import * as React from 'react'
import { Platform } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AddDeck from '../components/AddDeck'
import DecksList from '../components/DecksList'

import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { lightPurp } from '../utils/colors'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Decks') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline'
            return (
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-bookmark' : 'md-bookmark'}
                size={size}
                color={color}
              />
            )
          } else if (route.name === 'Add Deck') {
            iconName = focused ? 'ios-list-box' : 'ios-list'
            return <FontAwesome name='plus-square' size={size} color={color} />
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: lightPurp,
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen name='Decks' component={DecksList} />
      <Tab.Screen name='Add Deck' component={AddDeck} />
    </Tab.Navigator>
  )
}

export default TabNavigator
