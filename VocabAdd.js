import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableHighlight, Text} from 'react-native';

import { addWord } from './api'

const styles = StyleSheet.create({
    fieldContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    partspchText: {
        height: 50,
        margin: 0,
        marginLeft: 7,
        marginRight: 7,
        paddingLeft: 10,
        fontSize: 20,
    },
    wordText: {
        height: 50,
        margin: 0,
        marginTop: 3,
        marginLeft: 7,
        marginRight: 7,
        paddingLeft: 10,
        fontSize: 20,
    },
    definitionText: {
        height: 50,
        margin: 0,
        marginTop: 3,
        marginLeft: 7,
        marginRight: 7,
        paddingLeft: 10,
        fontSize: 20,
    },
    borderTop: {
        borderColor: '#edefef',
        borderTopWidth: 1.2,
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
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
});

class VocabAdd extends Component {
    state = {
        partofspeech: '',
        word: '',
        definition: '',
        id: 0,
    }

    handleChangePartSpeech = (text) => {
        this.setState({ 
            partofspeech: text,
        });
    }

    handleChangeWord = (text) => {
        this.setState({ 
            word: text,
        });
    }

    handleChangeDefinition = (text) => {
        this.setState({ 
            definition: text,
        });
    }

    handleAddWordPress = () => {
        addWord(this.state).then(() => {
            this.props.navigation.goBack()
        })   
    }

    render() {
        return(
            <View style={{ flex: 1 }}>
                <View style={styles.fieldContainer}>
                    <TextInput 
                        style={styles.partspchText}
                        onChangeText={this.handleChangePartSpeech}
                        placeholder="Part of Speech"
                        spellCheck={true}
                        value={this.state.partofspeech}
                    />
                    <TextInput 
                        style={[styles.wordText, styles.borderTop]}
                        autoFocus={true}
                        onChangeText={this.handleChangeWord}
                        placeholder="Word"
                        spellCheck={true}
                        value={this.state.word}
                    />
                    <TextInput 
                        style={[styles.definitionText, styles.borderTop]}
                        onChangeText={this.handleChangeDefinition}
                        placeholder="Definition"
                        spellCheck={true}
                        value={this.state.definition}
                    />
                </View>

                <TouchableHighlight
                    key='touchadd'
                    onPress={this.handleAddWordPress}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Add Word</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default VocabAdd;