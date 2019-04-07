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