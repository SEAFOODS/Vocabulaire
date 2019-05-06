import Expo from 'expo';

const { manifest } = Expo.Constants;
const api = manifest.debuggerHost.split(`:`).shift().concat(`:3000`);

const url = `http://${api}/wordlist`;

function setId(item) {
    item = item+1;
}

export function getWordList(id) {
    if(id != null) {
        return fetch(url + '/' + id)
        .then(response => response.json())
    }
    return fetch(url)
    .then(response => response.json())
}

export function getWordListLength() {
    return fetch(url)
    .then(response => Object.values(response).length)
}

export function getRandWord() {
    return fetch(url)
    .then(response => response.json())
}

export function addWord({ partofspeech, word, definition, id}) {
    return setId(id), fetch(url, {
        method: 'POST',
        body: JSON.stringify({
        partofspeech,
        word,
        definition, 
        id,
        }),
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    })
    .then(res => res.json())
    .catch(err => console.log(err));
}  

export function deleteWord(id) {
    return fetch(url + '/' + id, {
        method: 'DELETE',
    })
}
export function writeQuestion(type) {
    if(type == 1) {
        return (
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
             </View>)
    }
    if(type == 2) {
        return (
            <View style={{ flex: 1 }}>
                <View key={this.state.word.id} style={styles.questionCard}>
                    <View style={styles.vocabContainer}>
                        <View style={styles.vocab}>
                            <Text style={styles.word}>What is the definition of {this.state.length}?</Text>
                        </View>
                    </View>
                </View>
                <View key={this.state.word.id} style={styles.answerCard}>
                    <View style={styles.vocabContainer}>
                        <View style={styles.vocab}>
                             <TouchableHighlight>
                                <Text style={styles.word}>{this.state.word.definition}</Text>
                             </TouchableHighlight>
                        </View>
                    </View>
                </View>
             </View>)
    }
    if(type == 3) {
        return (
            <View style={{ flex: 1 }}>
                <View key={this.state.word.id} style={styles.questionCard}>
                    <View style={styles.vocabContainer}>
                        <View style={styles.vocab}>
                            <Text style={styles.word}>What part of speech is this word{this.state.length}?</Text>
                        </View>
                    </View>
                </View>
                <View key={this.state.word.id} style={styles.answerCard}>
                    <View style={styles.vocabContainer}>
                        <View style={styles.vocab}>
                             <TouchableHighlight>
                                <Text style={styles.word}>{this.state.word.partofspeech}</Text>
                             </TouchableHighlight>
                        </View>
                    </View>
                </View>
             </View>)
    }
    if(type == 4) {
        return (
            <View style={{ flex: 1 }}>
                <View key={this.state.word.id} style={styles.questionCard}>
                    <View style={styles.vocabContainer}>
                        <View style={styles.vocab}>
                            <Text style={styles.word}>What word fits this definition{this.state.length}?</Text>
                        </View>
                    </View>
                </View>
                <View key={this.state.word.id} style={styles.answerCard}>
                    <View style={styles.vocabContainer}>
                        <View style={styles.vocab}>
                             <TouchableHighlight>
                                <Text style={styles.word}>{this.state.word.word}</Text>
                             </TouchableHighlight>
                        </View>
                    </View>
                </View>
             </View>)
    }
}
