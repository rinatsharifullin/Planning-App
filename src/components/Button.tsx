import React from "react";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    width: "20%",
    padding: '5px',
    marginLeft: '10px',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },

});

type InnerProps = {};
type OuterProps = {
  type: "button" | "submit";
  btnText: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};
type Props = InnerProps & OuterProps;

const Button = ({ btnText, type, onClick }: Props) => {
  const classes = useStyles();
  return (
    <button
      className={classes.button}
      style={{ backgroundColor: btnText === "Submit" ? "#1976d2" : "#dc004e" }}
      type={type}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
