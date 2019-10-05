import React, { Component } from 'react'
import { View, TextInput, CheckBox, StyleSheet } from 'react-native'

class CustomInput extends Component {
  state = {
    isChecked: false,
    value: null
  }

  handleChecked = () => {
    this.setState({
      isChecked: !this.state.isChecked
    }, () => {
      this.props.isChecked(this.state.isChecked)
    })
  }

  handleChangeValue = (value) => {
    this.setState({ value }, () => {
      this.props.value(this.state.value)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputText} keyboardType='numeric' value={this.state.value} onChangeText={this.handleChangeValue} />
        <CheckBox value={this.state.isChecked} onChange={this.handleChecked} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8
  },
  inputText: {
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 8
  }
})

export default CustomInput
