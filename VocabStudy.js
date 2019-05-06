import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight} from 'react-native';

import { StudyWordList } from './WordList';
import { getWordList, getRandWord, getWordListLength } from './api';

const styles = StyleSheet.create({
    button: {
        height: 50,
        backgroundColor: '#32CD32',
        borderColor: '#32CD32',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
    },
    questionCard: {
        backgroundColor: '#fff',
        height: 100,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 12,
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
      },
      answerCard: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 12,
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
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

class VocabStudy extends Component {
    state = {
        rightWord: '',
        word: '',
        wordLength: '',
    }

    componentDidMount() {
        getWordListLength().then(wordLength => this.setState({ wordLength }));
        var rand = Math.floor(Math.random() * {this.state.wordLength})];
        this.props.navigation.addListener('didFocus', () => {
            getWordList(rand).then(word => this.setState({ word }));
        })
    }

    handleStudyeWordPress = () => {
        this.props.navigation.goBack();
    }

    render() {
        return(
            <View style={{ flex: 1 }}>
                <View key={this.state.word.id} style={styles.questionCard}>
                    <View style={styles.vocabContainer}>
                        <View style={styles.vocab}>
                            <Text style={styles.word}>What is the id of {this.state.length}?</Text>
                        </View>
                    </View>
                </View>
                <View key={this.state.word.id} style={styles.answerCard}>
                    <View style={styles.vocabContainer}>
                        <View style={styles.vocab}>
                            <TouchableHighlight>
                                <Text style={styles.word}>{this.state.word.id}</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default VocabStudy;
