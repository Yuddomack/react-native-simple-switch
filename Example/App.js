/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Switch from 'react-native-simple-switch';

const data = [
  {
    value:true,
  },
  {
    value:false,
    width:50,
    height:30,
    diameter:28,
    buttonColor:'#eee',
    activeButtonColor:'#fff',
    shadowColor:'#ccc',
    activeShadowColor:'#eee',
    barColor:'#aaa',
    activeBarColor:'#4cd864',
  },
  {
    value:true,
    width:100,
    activeBarColor:'#ffa19c',
    activeButtonColor:'#ff4a41',
    activeShadowColor:'#c13932', // if you dont want to see shadow, use same color with button
  },
  {
    value:false,
    width:50,
    height:30,
  },
  {
    value:true,
    diameter:100,
  },
];

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      data:[...data],
    };
  }

  _switch(idx){
    this.setState((prevState, props) => {
      const nextData = [...prevState.data];

      nextData[idx].value = !nextData[idx].value;
      return { data:nextData };
    });
  }

  _checkOff(){
    const onSwitches = this.state.data.filter((d) => d.value===true);

    if(onSwitches.length<=0){
      alert('All switches are off.');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.data.map((data, index) => {
            const {
              width,
              height,
              diameter,
              buttonColor,
              activeButtonColor,
              shadowColor,
              activeShadowColor,
              barColor,
              activeBarColor} = data;
            return (
              <Switch
                key={index}
                width={width}
                height={height}
                diameter={diameter}
                buttonColor={buttonColor}
                activeButtonColor={activeButtonColor}
                shadowColor={shadowColor}
                activeShadowColor={activeShadowColor}
                barColor={barColor}
                activeBarColor={activeBarColor}

                onPress={this._switch.bind(this, index)}
                callback={this._checkOff.bind(this)}
                value={data.value}/>
            )
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
