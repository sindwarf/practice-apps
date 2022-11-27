import React from 'react';

let AccountCreation = ({currentForm, nextForm}) => {

  if(currentForm === 1) {
  return(
    <div>
      <h1>Create an Account</h1>
      <form onSubmit={(e) => {nextForm(e)}}>
        <h4>Name</h4>
        <input type = 'text' id='name'/>
        <h4>Email</h4>
        <input type = 'text' id='email'/>
        <h4>Password</h4>
        <input type = 'text' id='password'/>
        <input type = 'submit' value='Next'/>
      </form>
    </div>
  );
  } else {
    return null;
  }
}

export default AccountCreation;