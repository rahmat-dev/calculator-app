import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class BtnOperator extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.value(this.props.title)} style={styles.btnOperator}>
          <Text style={styles.title}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btnOperator: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    margin: 16,
    borderWidth: 1,
    borderRadius: 8
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
})

export default BtnOperator
