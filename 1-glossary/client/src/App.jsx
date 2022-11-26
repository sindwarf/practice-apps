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
    e.preventDefault();
    console.log(e.target[0].value)
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

  let editWord = (e, objId) => {//TODO: get id of word obj and send to edit with new description
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(objId);
    let putObj = {
      _id : objId,
      word : e.target[0].value,
      description : e.target[1].value
    }
    axios.put('/words', putObj)
    .then(response => {
      console.log('success at put', response);
      setUpdateState(!updateState);
    })
    .catch(err => {
      console.log('error at put', err);
    })
  }

  let deleteWord = (e) => {
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
      <WordList addWord={(word) => addWord(word)} editWord={(word, objId) => editWord(word, objId)}
      deleteWord={(word) => deleteWord(word)} wordState={wordState}/>
    </div>
  );
}


export default App;