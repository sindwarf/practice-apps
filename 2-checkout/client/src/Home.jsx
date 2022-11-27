import React from 'react';

let ContactInfo = ({currentForm, nextForm}) => {

  if(currentForm === 0) {
    return(
      <div>
        Home
        <button onClick={nextForm}>Next</button>
      </div>
    );
    } else {
      return null;
    }
}

export default ContactInfo;