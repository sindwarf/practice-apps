import React from 'react';

let AddWord = ({addWord}) => {

  return(
    <div>
    AddWord
    <button onClick={addWord}>I send a post request</button>
    </div>
  );
}

export default AddWord;