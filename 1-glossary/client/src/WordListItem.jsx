import React from 'react';

let WordListItem = ({editWord, deleteWord}) => {

  return(
    <div>
      WordListItem
      <br></br>
      <button onClick={editWord}>I send a put request</button>
      <br></br>
      <button onClick={deleteWord}>I send a delete request</button>
    </div>
  );
}

export default WordListItem;