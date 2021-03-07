import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from './TabNavigator'
import { lightPurp, white } from '../utils/colors'
import AddCard from '../components/AddCard'
import DeckDetails from '../components/DeckDetails'
import Quiz from '../components/Quiz'

const Stack = createStackNavigator()

const StackNavigator = () => {
  const stackOptions = ({ route }) => ({
    title: route.params?.title ?? route.name,
  })
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: lightPurp },
        headerTintColor: white,
      }}
    >
      <Stack.Screen
        name='Home'
        component={TabNavigator}
        options={{ title: '' }}
      />
      <Stack.Screen
        name='DeckDetails'
        component={DeckDetails}
        options={stackOptions}
      />
      <Stack.Screen name='AddCard' component={AddCard} options={stackOptions} />
      <Stack.Screen name='Quiz' component={Quiz} options={stackOptions} />
    </Stack.Navigator>
  )
}
export default StackNavigator
