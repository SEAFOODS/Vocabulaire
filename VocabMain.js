import React, { Component } from 'react';
import { StyleSheet, FlatList, Alert } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import { WordList } from './WordList';
import { getWordList } from './api';

const styles = StyleSheet.create({
    list: {
      flex: 1,
      paddingTop: 5,
      backgroundColor: '#f2f2f2',
    },
    button: {
        height: 50,
        width: 310,
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
        fontSize: 18,
    },
  });

class VocabMain extends Component {
    static navigationOptions = {
        title: "Word List",
    };

    state = {
        words: '',
    }

    componentDidMount() {
        this.props.navigation.addListener('didFocus', () => {
            getWordList(null).then(words => this.setState({ words }));
        })
    }

    handleAddPress = () => {
        this.props.navigation.navigate('add')
    }

    handleDeletePress = () => {
        if(this.state.words == '') {
            Alert.alert("Hold up!", "There aren't any words to delete.",
                [{text: 'OK', onPress: () => console.log('OK Pressed')},]
            )
            return;
        }
        this.props.navigation.navigate('delete')
    }

    render(){
        return [
            <FlatList
                key="flatlist"
                data={this.state.words}
                style={styles.list}
                keyExtractor={item => item.id}
                renderItem={({ item, separators }) => (
                    <WordList
                        words={item}
                    />
                )}
            />,
            <ActionButton key='addWord' buttonColor='rgba(255, 215, 0, 1)'
                renderIcon={active => active
                    ? (<Icon name='md-star' size={32} color='#FFF' />)
                    : (<Icon name='md-star' size={32} color='#FFF' />)
                }
            >
                <ActionButton.Item buttonColor='rgba(51, 204, 255, 1)' title='Add Word' onPress={this.handleAddPress}>
                    <Icon name='md-add' size={30} color='#FFF'></Icon>
                </ActionButton.Item>
                <ActionButton.Item buttonColor='rgba(231,76,60,1)' title='Delete Words' onPress={this.handleDeletePress}>
                    <Icon name='md-remove' size={30} color='#FFF'></Icon>
                </ActionButton.Item>
            </ActionButton>
        ];
    }
}

export default VocabMain;