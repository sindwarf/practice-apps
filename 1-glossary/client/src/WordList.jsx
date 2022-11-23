import React from 'react';
import WordListItem from './WordListItem.jsx';
import AddWord from './AddWord.jsx';

let WordList = ({addWord, editWord, deleteWord}) => {

  return(
    <div>
      WordList
      <AddWord addWord={(word) => addWord(word)}/>
      <br></br>
      <WordListItem editWord={(word) => editWord(word)} deleteWord={(word) => deleteWord(word)}/>
    </div>);
}

export default WordList;