import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class YellowButton extends Component {
  render(){
    return(
   <Button color="yellow" title="click me"></Button>

    );
  }
}
export default class App extends Component {
  render() {
    return (
      <View style ={{marginTop:500}}>
      <YellowButton/>
      <Text>kshitij</Text>
        </View>
    );
  }
}