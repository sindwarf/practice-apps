import React from 'react';
import Search from './Search.jsx';
import WordList from './WordList.jsx';
import axios from 'axios';

const App = () => {

  let searchWords = (e) => {
    getAllWords((err, data) => {
      if(err) {
        console.log('ERROR GETTING : ', err);
      } else {
        console.log('success: ', data);
      }
    });
  }

  let getAllWords = (callback) => {
    axios.get('/words')
      .then((response) => {
        callback(null, response.data);
      })
      .catch((err) => {
        callback(err, null);
      })
  }

  let addWord = (e) => {
    let wordObj = {
      word : 'testWord',
      description : 'testDescription'
  };
    axios.post('/words', wordObj)
    .then(response => {
      console.log('success at post', response);
    })
    .catch(err => {
      console.log('error at post', err);
    })

  }

  let editWord = (e) => {
    console.log('clicked');
  }

  let deleteWord = (e) => {
    console.log('clicked');
  }

  return (
    <div>
      <p>Hello, World!</p>
      <br></br>
      <Search searchWords={(e) => searchWords(e)}/>
      <br></br>
      <WordList addWord={(word) => addWord(word)} editWord={(word) => editWord(word)} deleteWord={(word) => deleteWord(word)}/>
    </div>
  );
}


export default App;