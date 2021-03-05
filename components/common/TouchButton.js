import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { white, black } from '../../utils/colors'

const TouchButton = ({ children, onPress, btnStyle = {}, txtStyle = {} }) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={[styles.btn, btnStyle]} onPress={onPress}>
        <Text style={[styles.btnText, txtStyle]}>{children}</Text>
      </TouchableOpacity>
    </View>
  )
}

TouchButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  btnStyle: PropTypes.object,
  txtStyle: PropTypes.object,
}
export default TouchButton

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    margin: 10,
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: black,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: black,
  },
  btnText: {
    color: 'white',
  },
})
