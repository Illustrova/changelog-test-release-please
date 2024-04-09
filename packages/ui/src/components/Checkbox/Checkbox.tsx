import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Checkbox = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return <input type="checkbox" />;
};
