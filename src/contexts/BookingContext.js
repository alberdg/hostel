import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

/**
 * Booking context provider
 * @function
 * @returns { Object } context Booking context
 */
const BookingContextProvider = (props) => {
  const [ dateIn, setDateIn ] = useState('2020-12-09');
  const [ dateOut, setDateOut ] = useState('2020-12-09');
  const [ firstname, setFirstname ] = useState('Alberto');
  const [ lastname, setLastname ] = useState('Godar');
  const [ email, setEmail ] = useState('albertogodar@gmail.com');
  const [ phoneNumber, setPhoneNumber ] = useState('687014958');
  const [ bookingStep, setBookingStep ] = useState(0);

  const [ cardHolderName, setCardHolderName ] = useState('');
  const [ cardNumber, setCardNumber ] = useState('');
  const [ cardCvc, setCardCvc ] = useState('');
  const [ cardExpirationMonth, setCardExpirationMonth ] = useState('');
  const [ cardExpirationYear, setCardExpirationYear ] = useState('');

  /**
   * Clears booking from context
   * @function
   */
  const clearBooking = () => {
    setDateIn('');
    setDateOut('');
    setFirstname('');
    setLastname('');
    setEmail('');
    setPhoneNumber('');
    setBookingStep(0);
    setCardHolderName('');
    setCardNumber('');
    setCardCvc('');
    setCardExpirationMonth('');
    setCardExpirationYear('');
  }
  /**
   * Stores date in into context
   * @function
   */
  const storeDateIn = dateIn => {
    setDateIn(dateIn);
  }

  /**
   * Stores date out into context
   * @function
   */
  const storeDateOut = dateOut => {
    setDateOut(dateOut);
  }

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

   /**
    * Stores card holder name in context
    * @function
    * @param { String } cardHolderName Card holder's name
    */
   const storeCardHolderName = cardHolderName => {
     setCardHolderName(cardHolderName)
   }

   /**
    * Stores card number in context
    * @function
    * @param { String } cardNumber Card number
    */
   const storeCardNumber = cardNumber => {
     setCardNumber(cardNumber)
   }

   /**
    * Stores card cvc in context
    * @function
    * @param { String } cardCvc Card cvc
    */
   const storeCardCvc = cardCvc => {
     setCardCvc(cardCvc)
   }

   /**
    * Stores card expiration month in context
    * @function
    * @param { String } cardExpirationMonth Card expiration month
    */
   const storeCardExpirationMonth = cardExpirationMonth => {
     setCardExpirationMonth(cardExpirationMonth)
   }

   /**
    * Stores card expiration year in context
    * @function
    * @param { String } cardExpirationYear Card expiration year
    */
   const storeCardExpirationYear = cardExpirationYear => {
     setCardExpirationYear(cardExpirationYear)
   }
  return (
    <BookingContext.Provider value={{
      dateIn, storeDateIn,
      dateOut, storeDateOut,
      firstname, storeFirstname,
      lastname, storeLastname,
      email, storeEmail,
      phoneNumber, storePhoneNumber,
      bookingStep, storeBookingStep,
      cardHolderName, storeCardHolderName,
      cardNumber, storeCardNumber,
      cardCvc, storeCardCvc,
      cardExpirationMonth, storeCardExpirationMonth,
      cardExpirationYear, storeCardExpirationYear,
      clearBooking,
    }}>
      {props.children}
    </BookingContext.Provider>
  )
}
export default BookingContextProvider;
