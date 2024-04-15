import React from "react";

type InputProps = {
  type?: "text" | "number" | "password";
};

export const Input = ({ type = "text", ...props }: InputProps) => {
  return <input type={type} style={{ background: "yellow" }} {...props} />;
};
