import React from 'react';

let WordListItem = ({editWord, deleteWord, wordObj}) => {

  return(
    <div>
            <br/><hr/>
      <h3>{wordObj.word}</h3>
      <p>{wordObj.description}</p>
      <br></br>
      <form onSubmit={(e) => {editWord(e, wordObj._id)}}>
        <label>
          Edit word here
          <input type ='text'/>
        </label>
        <label>
          Edit description here
          <input  type='text'/>
        </label>
        <input type='submit' value='Edit Word'/>
      </form>
      <br></br>
      <button onClick={(e) => {deleteWord(wordObj._id)}}>Delete Entry</button>

    </div>
  );
}

export default WordListItem;