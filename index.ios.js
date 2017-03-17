import React, {
  Component
} from 'react'

// var ReactNative = require('react-native');

import {
  Text,
  View,
  AppRegistry,
  StyleSheet
} from 'react-native';

var StopWatch = React.createClass({
  render() {
    return <View>
      <Text>
        00:00.00
      </Text>
      {this.startStopButton()}
      {this.lapButton()}
    </View>
  },
  startStopButton() {
    return <View>
      <Text>
        Start
      </Text>
    </View>
  },
  lapButton() {
    return <View>
      <Text>
        Lap
      </Text>
    </View>
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
