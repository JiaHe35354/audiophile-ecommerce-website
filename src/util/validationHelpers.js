import {
  eMoneyNumberRegex,
  isEmail,
  isNotEmpty,
  phoneRegex,
  pinRegex,
  zipRegex,
} from "./validation.js";

export function validateField(name, value) {
  switch (name) {
    case "name":
    case "address":
    case "city":
    case "country":
      if (!isNotEmpty(value)) return "This field is required.";
      break;
    case "email":
      if (!isEmail(value)) return "Invalid email.";
      break;
    case "phone-number":
      if (!phoneRegex.test(value)) return "Invalid phone number.";
      break;
    case "zip-code":
      if (!zipRegex.test(value)) return "Invalid ZIP code.";
      break;
    case "e-money-number":
      if (!eMoneyNumberRegex.test(value)) return "Invalid e-Money number.";
      break;
    case "e-money-pin":
      if (!pinRegex.test(value)) return "PIN must be exactly 4 digits.";
      break;
    default:
      return null;
  }

  return null;
}
