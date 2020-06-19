export const required = value => value;

export const maxLength = max => value => value && value.length <= max;

export const maxLength15 = maxLength(15);
export const maxLength128 = maxLength(128);
export const maxLength500 = maxLength(500);

export const minLength = min => value => value && value.length >= min;

export const minLength6 = minLength(6);
export const minLength50 = minLength(50);

export const validEmail = email =>
  /^(([^<>()[\]\\.,;:\s@“]+(\.[^<>()[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
