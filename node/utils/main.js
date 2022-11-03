const validator = require("email-validator");

module.exports = {
  isEmailValid: (email) => {
    return validator.validate(email);
  },
  passwordValid: (pass1, pass2) => {
    if (pass1 !== pass2) return "no";
    if (pass1.length < 5 || pass2.length < 5) return "no";
    if (pass1.length > 100 || pass2.length > 100) return "no";
    return "yes";
  },
  hasUpperCase: (str) => {
    return str !== str.toLowerCase();
  },
};
