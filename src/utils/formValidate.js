import {
  required,
  validEmail,
  minLength6,
  maxLength15,
  maxLength128,
  minLength50,
  maxLength500
} from "./validate";

export function buildErr(errCode, params = {}) {
  return {
    errCode,
    ...params
  };
}

export const require = value =>
  required(value) ? undefined : buildErr("Required field, please fill it");

export const email = value =>
  validEmail(value) ? undefined : buildErr("Invalid email");

export const password = value => {
  if (minLength6(value) && maxLength15(value)) {
    return undefined;
  } else {
    return buildErr("Your password must be between 6 and 15 characters");
  }
};

export const matchPassword = (value, allValues) =>
  value !== allValues.password
    ? buildErr("Password is not match. Please type again")
    : undefined;

export const headline = value =>
  maxLength128(value)
    ? undefined
    : buildErr("Your headline must not be longer than 128 characters");

export const body = value => {
  if (minLength50(value) && maxLength500(value)) {
    return undefined;
  } else {
    return buildErr("Your review must be between 50 and 500 characters");
  }
};
