import React from "react";
import { ButtonStyled } from "./styled";

type ButtonType = {
  label: string,
  onClick: Function | any
}

export const Button = (props : ButtonType) => {
  return <ButtonStyled {...props}>{props.label}</ButtonStyled>;
};
