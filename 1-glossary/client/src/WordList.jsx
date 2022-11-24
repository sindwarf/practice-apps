import React from 'react';
import WordListItem from './WordListItem.jsx';
import AddWord from './AddWord.jsx';

let WordList = ({addWord, editWord, deleteWord, wordState}) => {

  return(
    <div>
      <h4>Explore Words</h4>
      <AddWord addWord={(word) => addWord(word)}/>
      <br></br>
      {
        wordState.map((wordObj) => {
        return (
            <WordListItem editWord={(word) => editWord(word)} deleteWord={(word) => deleteWord(word)} wordObj={wordObj}/>
          )
        }
        )
      }

    </div>);
}

export default WordList;