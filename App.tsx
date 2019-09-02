import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import Voice from 'react-native-voice';


export default class App extends Component{
    state = {
        listening: "pause",
        complete: '',
        partial: '',
    };
constructor(props) {
super(props);
Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
Voice.onSpeechError = this.onSpeechError.bind(this);
Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
Voice.onSpeechPartialResults = this.onSpeechPartialHandler.bind(this);
}

onSpeechResultsHandler(result){
    console.log("result start", result)
this.setState({complete: result.value})
}

onSpeechPartialHandler(result){
    console.log("result partial", result)
    this.setState({partial: result.value})
}

onSpeechStartHandler(){
this.setState({listening:"started"})
console.log("speech started")
}

onSpeechEndHandler(result){
    console.log("result stop", result)
    this.setState({listening:"pause"})
}
onSpeechError(err){
	console.log(err)
}

render() {
  return (
      <View>
        <Text>Prova2</Text>
        <Text>react-native-voice Test</Text>
        <Button title={'start'} onPress={(e) => {
          console.log("start")
          Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
          Voice.start("it-IT");
        }}/>
        <Text>Ascolto {this.state.listening}</Text>
        <Text>Che cosa hai detto?   {this.state.complete}</Text>
        <Text>Partial   {this.state.partial}</Text>
      </View>
  )
}}
