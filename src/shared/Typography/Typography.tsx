import React from "react";
import { TypographyStyled } from "./styled";

type TypographyType = {
    variety: 'title' |'header',
    children: object | string
}

export const Typography = (props: TypographyType) => {
  return <TypographyStyled {...props}>{props.children}</TypographyStyled>;
};
