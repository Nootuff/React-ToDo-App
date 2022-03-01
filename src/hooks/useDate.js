import React, { useState } from "react";

export default date => {

  const today = new Date();

  const currDate = () => {
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0.
    const dd = String(today.getDate()).padStart(2, '0');
    return yyyy + '-' + mm + '-' + dd;
  }

//all of this date stuff is a mess, got to standardize the formats 

  const dateConverter = (str, split, join) => { 
    return str.split(split).reverse().join(join);
  }

  return [currDate, dateConverter];
}