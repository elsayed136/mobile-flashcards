import * as API from '../utils/api'

// Actions
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_CARD = 'ADD_CARD'

// Action Creator
export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title,
  }
}

export function removeDeck(deckId) {
  return {
    type: REMOVE_DECK,
    deckId,
  }
}

export function addCardToDeck(deckId, card) {
  return {
    type: ADD_CARD,
    deckId,
    card,
  }
}
// thunk
export function handleAddDeck(title) {
  return dispatch => {
    return API.saveDeckTitle(title).then(() => {
      dispatch(addDeck(title))
    })
  }
}
export function handleRemoveDeck(deckId) {
  return dispatch => {
    return API.removeDeck(deckId).then(() => {
      dispatch(removeDeck(deckId))
    })
  }
}
export function handleAddCardToDeck(deckId, card) {
  return dispatch => {
    return API.addCardToDeck(deckId, card).then(() => {
      dispatch(addCardToDeck(deckId, card))
    })
  }
}

export function handleInitialData() {
  return dispatch => {
    return API.getDecks().then(decks => {
      dispatch(receiveDecks(decks))
    })
  }
}
