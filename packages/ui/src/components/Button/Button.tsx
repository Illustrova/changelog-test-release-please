import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <button style={{ color: "red" }} {...rest}>
      {children}
    </button>
  );
};
