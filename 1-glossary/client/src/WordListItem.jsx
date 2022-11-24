import React from 'react';

let WordListItem = ({editWord, deleteWord, wordObj}) => {

  return(
    <div>
      <h3>{wordObj.word}</h3>
      <p>{wordObj.description}</p>
      <br></br>
      <button onClick={editWord}>I send a put request</button>
      <br></br>
      <button onClick={(e) => {deleteWord(wordObj._id)}}>Delete Entry</button>
    </div>
  );
}

export default WordListItem;