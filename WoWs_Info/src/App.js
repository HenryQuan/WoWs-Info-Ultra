import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { DataStorage } from './core/';
import { LoadingScreen } from './screen';
import { WoWsStatusBar } from './component/';
import { MainRouter } from './router';
import strings from './localization';

export default class App extends Component {
  state = {
    isReady: false,
    resetCount: 0,
  }
  
  async componentWillMount() {
    let ready = await DataStorage.dataValidation();
    this.setState({
      isReady: ready,
    })
  }

  render() {
    if (this.state.isReady) {
      return (
        <View style={ViewStyle}>
          <WoWsStatusBar />
          <MainRouter reset={this.resetApp}/>
        </View>
      );
    } else {
      return <LoadingScreen />
    }
  }

  resetApp = () => {
    this.setState({
      resetCount: this.state.resetCount + 1,
    })
  }
}

const styles = StyleSheet.create({
  ViewStyle: {
    backgroundColor: 'white',
    flex: 1,
  },
  TextStyle: {
    textAlign: 'center',
    padding: 20,
  }
});

const { ViewStyle, TextStyle } = styles;
