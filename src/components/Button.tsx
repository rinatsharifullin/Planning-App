import React from "react";

type OuterProps = {
  type: "button" | "submit";
  btnText: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({ btnText, type, onClick }: OuterProps) => {
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
