import React from 'react';

let AddWord = ({addWord}) => {

  return(
    <div>
    <form value = "value"onSubmit={addWord}>
      <label>
        Add a word :
        <input type = "text"/>
        </label>

        <label>
         Add a description :
        <input type = "text"/>
        <input type = "submit" value="Add Word" />
        </label>

    </form>
    </div>
  );
}

export default AddWord;