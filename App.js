import React, { Component } from 'react';
import { View } from 'react-native';

import { Header } from './src/components/common'

class App extends Component {
  render() { 
    return ( 
      <View>
        <Header title="Product management" />
      </View>
     );
  }
}
 
export default App;