import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  WebView,
  View
} from 'react-native';
import AccordionView from './view/Accordion2';


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <AccordionView />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:20
  }
});