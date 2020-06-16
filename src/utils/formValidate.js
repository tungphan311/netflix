import { required, validEmail, minLength6, maxLength15 } from "./validate";

export function buildErr(errCode, params = {}) {
  return {
    errCode,
    ...params
  };
}

export const require = value =>
  required(value)
    ? undefined
    : buildErr("Đây là trường bắt buộc, vui lòng không bỏ trống");

export const email = value =>
  validEmail(value) ? undefined : buildErr("Email không hợp lệ");

export const password = value => {
  if (minLength6(value) && maxLength15(value)) {
    return undefined;
  } else {
    return buildErr("Mật khẩu của bạn phải từ 6 đến 15 ký tự");
  }
};

export const matchPassword = (value, allValues) =>
  value !== allValues.password
    ? buildErr("Mật khẩu không trùng khớp. Vui lòng nhập lại")
    : undefined;
