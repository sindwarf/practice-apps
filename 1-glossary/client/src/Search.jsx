import React from 'react';

let Search = ({searchWords}) => {

  return(
  <div>
    <form onSubmit={searchWords}>
      Search
      <input type = "text"/>
      <input type = 'submit'/>
    </form>
  </div>
  );
}

export default Search;