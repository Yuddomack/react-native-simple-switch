# react-native-simple-switch
A simple customizable switch switch for react native

<img src="https://t1.daumcdn.net/cfile/tistory/9913D74D5B5AF4DF2A" width="33%"><img src="https://t1.daumcdn.net/cfile/tistory/99545A4D5B5AF4E002" width="33%"><img src="https://t1.daumcdn.net/cfile/tistory/9938484D5B5AF4E114" width="33%">

### Support
    react-native >= 0.55
* Maybe even in lower version

### Installation
    npm install react-native-simple-switch

### Properties
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

### Trick
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
