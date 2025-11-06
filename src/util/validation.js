export function isEmail(value) {
  return value.includes("@");
}

export function isNotEmpty(value) {
  return value.trim() !== "";
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export const phoneRegex = /^\+?[0-9]{8,15}$/;

export const zipRegex = /^[A-Za-z0-9\- ]{4,10}$/;

export const eMoneyNumberRegex = /^[0-9]{9,12}$/;

export const pinRegex = /^[0-9]{4}$/;
