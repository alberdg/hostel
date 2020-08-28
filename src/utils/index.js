/**
 * Validates the given email
 * @function
 * @param { String } email Email to validate
 * @returns { Boolean} result Whether email is valid or not
 */
export const isValidEmail = email => {
 const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 return re.test(String(email).toLowerCase());
}

/**
 * Validates a phone number
 * @function
 * @param { String } phone Phone to validate
 * @returns { Boolean } valid Valid phone flag
 */
export const isValidPhoneNumber = phone => {
  const re = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/
  return re.test(phone);
}
