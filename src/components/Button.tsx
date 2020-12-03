import React from "react";

type InnerProps = {};
type OuterProps = {
  type: "button" | "submit";
  btnText: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};
type Props = InnerProps & OuterProps;

const Button = ({ btnText, type, onClick }: Props) => {
  return (
    <button
      style={{ backgroundColor: btnText === "Submit" ? "#1976d2" : "#dc004e" }}
      type={type}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
