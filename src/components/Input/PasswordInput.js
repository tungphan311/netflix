import React, { useState } from "react";
import Input from "./Input";

function PasswordInput({ type, ...props }) {
  const [types, setType] = useState("password");

  return (
    <Input type={types} {...props}>
      <i
        className={`fa ${
          types === "password" ? "fa-eye" : "fa-eye-slash"
        } input--icon`}
        onClick={() => setType(types === "password" ? "text" : "password")}
      />
    </Input>
  );
}

export default PasswordInput;
