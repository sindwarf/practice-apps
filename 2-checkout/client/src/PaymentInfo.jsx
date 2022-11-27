import React from 'react';

let PaymentInfo = ({currentForm, nextForm}) => {

  if(currentForm === 3) {
    return(
      <div>
        <h1>Enter your payment information</h1>
        <form onSubmit={(e) => {nextForm(e)}}>
          <h4>Credit Card Number</h4>
          <input type = 'text' id='creditCard'/>
          <h4>Expiration Date</h4>
          <input type = 'text' id='expiryDate'/>
          <h4>CVV</h4>
          <input type = 'text' id='cvv'/>
          <h4>Billing Zip Code</h4>
          <input type = 'text' id='billingZip'/>
          <input type = 'submit'/>
        </form>
      </div>
    );
    } else {
      return null;
    }
}

export default PaymentInfo;