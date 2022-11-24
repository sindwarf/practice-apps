import React, {useState, useEffect} from 'react';
import Search from './Search.jsx';
import WordList from './WordList.jsx';
import axios from 'axios';


const App = () => {

  const [wordState, setWordState] = useState([]);
  const [updateState, setUpdateState] = useState(true);

  useEffect(() => {
    console.log('rendering..');
    axios.get('/words')
      .then((response) => {
        setWordState(response.data)
      })
      .catch((err) => {
        callback(err, null);
      })
  }, [updateState]);


  let searchWords = (e) => {
    getAllWords((err, data) => {
      if(err) {
        console.log('ERROR GETTING IN SEARCH : ', err);
      } else {
        setWordState(data);
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
    e.preventDefault();
    let wordObj = {
      word : e.target[0].value,
      description : e.target[1].value
  };

    axios.post('/words', wordObj)
    .then(response => {
      console.log('success at post', response);
      setUpdateState(!updateState);
    })
    .catch(err => {
      console.log('error at post', err);
    })


  }

  let editWord = (e) => {//TODO: get id of word obj and send to edit with new description
    console.log('clicked');
  }

  let deleteWord = (e) => {//TODO: get id of word obj to send to delete
    axios.delete('/words', {params: {id : e}})//e is actually id
    .then(()=> {
      console.log('success at delete');
      setUpdateState(!updateState);
    })
    .catch(() => {
      console.log('error at delete');
    })
  }

  return (
    <div>
      <h1>Welcome to Word List</h1>
      <br></br>
      <Search searchWords={(e) => searchWords(e)}/>
      <br></br>
      <WordList addWord={(word) => addWord(word)} editWord={(word) => editWord(word)}
      deleteWord={(word) => deleteWord(word)} wordState={wordState}/>
    </div>
  );
}


export default App;