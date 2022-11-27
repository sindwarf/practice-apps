CREATE DATABASE checkout;

use checkout;

create table user (
  session_ID integer(11),
  name varchar(20),
  email varchar(20),
  password varchar(20),
  address1 varchar(60),
  address2 varchar(60),
  city varchar(20),
  state varchar(20),
  zipCode varchar(20),
  phone integer(11),
  creditCard integer(11),
  expiryDate integer(11),
  cvv integer(11),
  billingZip integer(11)
);

