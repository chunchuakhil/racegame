import {View, Text} from 'react-native';
import React from 'react';
import GameBoard from './src/components/GameBoard';

const App = () => {
  return (
    <View>
      <Text>Welcome</Text>
      <GameBoard />
    </View>
  );
};

export default App;
