import { toast as toaster } from "react-toastify";
import React from "react";
import { get } from "lodash";
import Toaster from "../components/Toastify/Toaster";

export function toast({ type = "success", message = "" }) {
  return toaster(<Toaster type={type} message={message} />);
}

export function toastErr(error) {
  let errMsg = get(error, "response.data.msg");

  if (!errMsg) {
    errMsg = "Có lỗi xảy ra";
  }

  toast({ type: "error", message: errMsg });
}
