# react-native-simple-switch
A simple customizable switch for react native

<img src="https://t1.daumcdn.net/cfile/tistory/9913D74D5B5AF4DF2A" width="33%"><img src="https://t1.daumcdn.net/cfile/tistory/99545A4D5B5AF4E002" width="33%"><img src="https://t1.daumcdn.net/cfile/tistory/9938484D5B5AF4E114" width="33%">

## Support
    react-native >= 0.55
* Maybe even in lower version

## Installation
    npm install react-native-simple-switch

## Properties
|props| types | default | comment
|----|-----|-----|---------|
|width|number|32||
|height|number|13||
|diameter|number|20|have to smaller than width|
|value|bool|false|switch's state|
|buttonColor|string|'#eee'||
|activeButtonColor|string|'#009685'||
|shadowColor|string|'#ccc'|if you dont want to see shadow, use same color with button|
|activeShadowColor|string|'#00a396'|if you dont want to see shadow, use same color with button|
|barColor|string|'#aaa'||
|activeBarColor|string|'#9ddfdc'||
|callback|func|() => null|callback when finished animation|

## Usage
```javascript
import Switch from 'react-native-simple-switch';
```
```javascript
<Switch value={} onPress={}/>
```

## Trick
* this properties are similar to both platform. ~~a little?~~

#### 1.Android
```javascript
<Switch
  width={32}
  height={13}
  diameter={20}
  buttonColor={'#eee'}
  activeButtonColor={'#009685'}
  shadowColor={'#ccc'}
  activeShadowColor={'#00a396'}
  barColor={'#aaa'}
  activeBarColor={'#9ddfdc'}/>
```

#### 2.ios
```javascript
<Switch
  width={50}
  height={30}
  diameter={28}
  buttonColor={'#eee'}
  activeButtonColor={'#fff'}
  shadowColor={'#ccc'}
  activeShadowColor={'#eee'}
  barColor={'#aaa'}
  activeBarColor={'#4cd864'}/>
```

## Example
```javascript
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
```
