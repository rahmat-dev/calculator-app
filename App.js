import React, { Component } from 'react'
import { Text, View, StyleSheet,  } from 'react-native'
import CustomInput from './src/components/CustomInput'
import BtnOperator from './src/components/BtnOperator'

export class App extends Component {
  state = {
    val1: null,
    val2: null,
    val3: null,
    check1: null,
    check2: null,
    check3: null,
    result: null
  }

  changeState = (stateName, value) => {
    this.setState({
      [stateName]: value
    })
  }

  handleChangeValue = (index, value) => {
    if(index === 1) {
      this.changeState('val1', parseFloat(value));
    } else if(index === 2) {
      this.changeState('val2', parseFloat(value));
    } else if(index === 3) {
      this.changeState('val3', parseFloat(value));
    }
  }

  handleChangeChecked = (index, value) => {
    if(index === 1) {
      this.changeState('check1', value);
    } else if(index === 2) {
      this.changeState('check2', value);
    } else if(index === 3) {
      this.changeState('check3', value);
    }
  }

  handleGetResult = (operator) => {
    const { val1, val2, val3, check1, check2, check3 } = this.state;
    let plus, minus, times, divided = 0;

    if (val1 && check1 && val2 && check2 && val3 && check3) {
      plus = val1 + val2 + val3;
      minus = val1 - val2 - val3;
      times = val1 * val2 * val3;
      divided = val1 / val2 / val3;
    } else if (val1 && check1 && val2 && check2) {
      plus = val1 + val2;
      minus = val1 - val2;
      times = val1 * val2;
      divided = val1 / val2;
    } else if (val1 && check1 && val3 && check3) {
      plus = val1 + val3;
      minus = val1 - val3;
      times = val1 * val3;
      divided = val1 / val3;
    } else if (val2 && check2 && val3 && check3) {
      plus = val2 + val3;
      minus = val2 - val3;
      times = val2 * val3;
      divided = val2 / val3;
    } else {
      alert('Harap isi / checklist minimal 2 input');
    }

    if (operator == '+') {
      this.changeState('result', plus);
    } else if (operator == '-') {
      this.changeState('result', minus);
    } else if (operator == 'x') {
      this.changeState('result', times);
    } else if (operator == '/') {
      this.changeState('result', divided);
    }
  }

  render() {
    const { result } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.titleApp}>CALCULATOR APP</Text>
        <View style={styles.line} />

        <View>
          <CustomInput value={(val) => this.handleChangeValue(1, val)} isChecked={(val) => this.handleChangeChecked(1, val)} />
          <CustomInput value={(val) => this.handleChangeValue(2, val)} isChecked={(val) => this.handleChangeChecked(2, val)} />
          <CustomInput value={(val) => this.handleChangeValue(3, val)} isChecked={(val) => this.handleChangeChecked(3, val)} />
        </View>

        <View style={styles.btnOperatorWrap}>
          <BtnOperator title='+' value={this.handleGetResult} />
          <BtnOperator title='-' value={this.handleGetResult} />
          <BtnOperator title='x' value={this.handleGetResult} />
          <BtnOperator title='/' value={this.handleGetResult} />
        </View>

        <View style={styles.line} />

        <View style={styles.resultWrap}>
          <Text>Hasil :</Text>
          <Text>{result}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  titleApp: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  btnOperatorWrap: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  line: {
    borderBottomWidth: 1,
    margin: 8
  },
  resultWrap: {
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default App
