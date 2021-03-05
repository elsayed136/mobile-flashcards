import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { gray } from '../../utils/colors'

const TextButton = ({ children, onPress, txtStyle = {} }) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.btnText, txtStyle]}>{children}</Text>
      </TouchableOpacity>
    </View>
  )
}

TextButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  txtStyle: PropTypes.object,
}
export default TextButton

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    margin: 10,
  },
  btnText: {
    color: gray,
  },
})
