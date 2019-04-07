import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';

import VocabMain from './VocabMain';
import VocabAdd from './VocabAdd';
import VocabDelete from './VocabDelete'
import VocabStudy from './VocabStudy';

YellowBox.ignoreWarnings([
  '',
]);


export default StackNavigator({
  main: {
    screen: VocabMain,
    navigationOptions: ({ navigation }) => ({
      title: 'Word List',
      headerRight: (
        <Button
          onPress={() => navigation.navigate('study')}
          title="Study Words"
          color="#22AB22"
        />
      ),
      headerStyle: {
        backgroundColor: '#008000',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    }),
  },
  add: {
    screen: VocabAdd,
    navigationOptions: () => ({
      title: 'Add Word',
      headerStyle: {
        backgroundColor: '#48BBEC',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    }), 
  },
  delete: {
    screen: VocabDelete, 
    navigationOptions: () => ({
      title: 'Delete Words',
      headerStyle: {
        backgroundColor: '#e00',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    }),
  },
  study: {
    screen: VocabStudy,
    navigationOptions: () => ({
      title: 'Start Studying',
    }),
  },
})