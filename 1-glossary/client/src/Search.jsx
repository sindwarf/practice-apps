import React from 'react';

let Search = ({searchWords}) => {

  return(
  <div>
    SearchBar
    <button onClick = {searchWords}> I send a get request</button>
  </div>
  );
}

export default Search;