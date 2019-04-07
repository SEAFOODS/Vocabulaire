import React, { Component } from 'react'
import { StyleSheet, FlatList, TouchableHighlight, Text } from 'react-native'

import { DeleteWordList } from './WordList';
import { getWordList, deleteWord } from './api';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 5,
        backgroundColor: '#f2f2f2',
    },
    button: {
        height: 40,
        backgroundColor: '#f00',
        borderColor: '#f00',
        alignSelf: 'stretch',
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff', 
        fontSize: 20,
    },
});

class VocabDelete extends Component {
    state = {
        words: '',
    }

    componentDidMount() {
        this.props.navigation.addListener('didFocus', () => {
            getWordList(null).then(words => this.setState({ words }));
        })
    }

    handleDeleteWordPress = () => {
        deleteWord().then(() => {
            this.props.navigation.goBack()
        })   
    }

    render() {
        return(
            <FlatList
                key="flatlist"
                data={this.state.words}
                style={styles.list}
                keyExtractor={item => item.id}
                renderItem={({ item, separators }) => (
                    <DeleteWordList
                        words={item}
                    />
                )}
            />
        );
    }
}

export default VocabDelete;