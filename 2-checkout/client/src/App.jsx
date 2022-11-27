import React, {useState, useEffect} from 'react';
import AccountCreation from './AccountCreation.jsx';
import ContactInfo from './ContactInfo.jsx';
import PaymentInfo from './PaymentInfo.jsx';
import Confirmation from './Confirmation.jsx';
import Home from './Home.jsx';
import axios from 'axios';
import _ from 'underscore';

let formObj = {};

let App = () => {


  const [currentForm, setCurrentForm] = useState(0);
  const [formInfo, setFormInfo] = useState(formObj);

  let nextForm = (e) => {
    e.preventDefault();
    if(currentForm === 1) {//account creation, post
      // let accountObj = {
      //   name : e.target['name'].value,
      //   email : e.target['email'].value,
      //   password : e.target['password'].value,
      // }
      formObj.name = e.target['name'].value,
      formObj.email = e.target['email'].value,
      formObj.password = e.target['password'].value,
      // axios.post('/account', accountObj)
      // .then((response) => {
      //   console.log(response.data);
      // }).catch((err) => {
      //   console.log('ERROR');
      // })
    setCurrentForm(2);
    } else if (currentForm === 2) {//shipping, update
      // let contactObj = {
      //   addressLine1 : e.target['addressLine1'].value,
      //   addressLine2 : e.target['addressLine2'].value,
      //   city : e.target['city'].value,
      //   state : e.target['state'].value,
      //   zip : e.target['zip'].value,
      //   phoneNumber : e.target['phoneNumber'].value
      // }
      // axios.put('/contactInfo', contactObj)
      // .then((response) => {
      //   console.log(response.data);
      // }).catch((err) => {
      //   console.log('ERROR');
      // })
      formObj.addressLine1 = e.target['addressLine1'].value;
      formObj.addressLine2 = e.target['addressLine2'].value,
      formObj.city = e.target['city'].value,
      formObj.state = e.target['state'].value,
      formObj.zip = e.target['zip'].value,
      formObj.phoneNumber = e.target['phoneNumber'].value
      setCurrentForm(3);
    } else if (currentForm === 3) {//payment, update
      /*
      let paymentObj = {
        creditCard : e.target['creditCard'].value,
        expiryDate : e.target['expiryDate'].value,
        cvv : e.target['cvv'].value,
        billingZip : e.target['billingZip'].value
      }

      // axios.put('/payment', formObj)
      // .then((response) => {
      //   console.log(response.data);
      // }).catch((err) => {
      //   console.log('ERROR');
      // })
      // axios.get('/confirmation').then((response) => {
      //   console.log(response.data)
      //   setFormInfo(response.data);
      //   console.log(formInfo);
      // }).catch((err) => {
      //   console.log('ERROR');
      // }).then(() => {
      //   setCurrentForm(4);
      // })*/
      formObj.creditCard = e.target['creditCard'].value,
      formObj.expiryDate = e.target['expiryDate'].value,
      formObj.cvv = e.target['cvv'].value,
      formObj.billingZip = e.target['billingZip'].value
      // console.log(formObj);
      axios.post('/account', formObj)
      .then((response) => {
        console.log(response.data);
      }).catch((err) => {
        console.log('ERROR', err);
      }).then(() => {
        setCurrentForm(4);
      })
    } else if (currentForm === 4) {//get all
      setCurrentForm(0);
    } else {
      setCurrentForm(1);
    }


  }

  return(<div>
  <p>Hello, World!</p>
  <p>
    <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
  </p>
  <Home currentForm={currentForm} nextForm={(e) => {nextForm(e)}}/>
  <AccountCreation currentForm={currentForm} nextForm={(e) => {nextForm(e)}}/>
  <ContactInfo currentForm={currentForm} nextForm={(e) => {nextForm(e)}}/>
  <PaymentInfo currentForm={currentForm} nextForm={(e) => {nextForm(e)}}/>
  <Confirmation currentForm={currentForm} nextForm={(e) => {nextForm(e)}} formInfo={formInfo}/>
</div>);
}

export default App;