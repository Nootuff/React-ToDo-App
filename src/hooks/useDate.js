import React, { useState } from "react";

export default date => {

   const datePosted = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0.
        const yyyy = today.getFullYear();
        return dd + '/' + mm + '/' + yyyy;
      } 

      var dateConverter = (str, split, join)  => {

      }

    return [datePosted];
}