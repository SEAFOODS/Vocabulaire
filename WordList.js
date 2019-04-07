import React, { Component } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';

import { deleteWord, getRandWord } from './api';

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      flex: 1,
      padding: 10,
      paddingTop: 10,
      paddingBottom: 12,
      margin: 10,
      marginTop: 5,
      marginBottom: 5,
    },
    cardHeader: {
      flex: 1,
      flexDirection: 'row',
    },
    vocabContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: '5%',
      paddingRight: '5%',
    },
    vocab: {
      width: '25%',
      flex: 1,
    },
    partofspeech: {
      fontWeight: '400',
      fontSize: 15,
      color: '#d8d8d8',
      width: '30%',
      textAlign: 'left',
    },
    word: {
      fontSize: 30,
      textAlign: 'left',
    },
    definition: {
      fontSize: 11,
      fontWeight: '100',
      color: '#a3a3a3',
      textAlign: 'left',
      paddingTop: 0,
      paddingBottom: 7,
    },
  });

export function WordList({ words }) {
  return (
    <View key={words.id} style={styles.card}>
      <View style={styles.vocabContainer}>
        <View style={styles.vocab}>
          <Text style={styles.partofspeech}>{words.partofspeech}</Text>
          <Text style={styles.word}>{words.word}</Text>
          <Text style={styles.definition}>{words.definition}</Text>
        </View>
      </View>
    </View>
  );
}

export function DeleteWordList({ words }) {
  return (
    <View key={words.id} style={styles.card}>
      <View style={styles.vocabContainer}>
        <View style={styles.vocab}>
          <Text style={styles.partofspeech}>{words.partofspeech}</Text>
          <Text style={styles.word}>{words.word}</Text>
          <Text style={styles.definition}>{words.definition}</Text>
        </View>
      </View>
        <Button title="Delete" color="#f00" onPress={() => deleteWord(words.id).then(() => {this.props.navigation.navigate("main")})} />
    </View>
  );
}