import React from "react";
import { TypographyStyled } from "./styled";

type TypographyType = {
    variety: 'title' |'header' |'body',
    children: object | string
}

export const Typography = (props: TypographyType) => {
  return <TypographyStyled {...props}>{props.children}</TypographyStyled>;
};
