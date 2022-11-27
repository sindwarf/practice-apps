import React from 'react';

let Confirmation = ({currentForm, nextForm, formInfo}) => {

  if(currentForm === 4) {
    return(
      <div>
        Confirmation
        <div>Name : {formInfo.name}</div>
        <div>Email : {formInfo.email}</div>
        <button onClick={nextForm}>Next</button>
      </div>
    );
    } else {
      return null;
    }
}

export default Confirmation;