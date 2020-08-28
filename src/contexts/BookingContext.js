import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

/**
 * Booking context provider
 * @function
 * @returns { Object } context Booking context
 */
const BookingContextProvider = (props) => {
  const [ firstname, setFirstname ] = useState('');
  const [ lastname, setLastname ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phoneNumber, setPhoneNumber ] = useState('');
  const [ bookingStep, setBookingStep ] = useState(0);

  /**
   * Stores first name in context
   * @function
   * @param { String } firstname First name
   */
  const storeFirstname = firstname => {
    setFirstname(firstname);
  }

  /**
   * Stores last name in context
   * @function
   * @param { String } firstname Last name
   */
  const storeLastname = lastname => {
    setLastname(lastname);
  }

  /**
   * Stores email in context
   * @function
   * @param { String } firstname email
   */
  const storeEmail = email => {
    setEmail(email);
  }

  /**
   * Stores phone number in context
   * @function
   * @param { String } firstname Phone number
   */
  const storePhoneNumber = phonenumber => {
    setPhoneNumber(phonenumber);
  }

  /**
   * Stores booking step in context
   * @function
   * @param { Number } step Booking step
   */
   const storeBookingStep = step => {
     setBookingStep(step);
   }

  return (
    <BookingContext.Provider value={{
      firstname, storeFirstname,
      lastname, storeLastname,
      email, storeEmail,
      phoneNumber, storePhoneNumber,
      bookingStep, storeBookingStep
    }}>
      {props.children}
    </BookingContext.Provider>
  )
}
export default BookingContextProvider;
