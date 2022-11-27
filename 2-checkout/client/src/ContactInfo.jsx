import React from 'react';

let ContactInfo = ({currentForm, nextForm}) => {

  if(currentForm === 2) {
    return(
      <div>
        <h1>Enter your contact information</h1>
        <form onSubmit={(e) => {nextForm(e)}}>
          <h4>Address 1</h4>
          <input type = 'text' id='addressLine1'/>
          <h4>Address 2</h4>
          <input type = 'text' id='addressLine2'/>
          <h4>City</h4>
          <input type = 'text' id='city'/>
          <h4>State</h4>
          <input type = 'text' id='state'/>
          <h4>Zip Code</h4>
          <input type = 'text' id='zip'/>
          <h4>Phone Number</h4>
          <input type = 'text' id='phoneNumber'/>
          <input type = 'submit'/>
        </form>
      </div>
    );
    } else {
      return null;
    }
}

export default ContactInfo;