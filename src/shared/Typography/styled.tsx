import styled from "styled-components";

export const TypographyStyled = styled.div<{variety: string}>`
  background-color: #ffeb00;
  padding: 13px 48px;
  color: #0000000;
  white-space: pre;
  margin-bottom: 10px;
  width: fit-content;
  font-size: ${(props) =>
    props.variety === "title"
      ? "43px"
      : props.variety === "header"
      ? "33px"
      : "22px"};
  font-weight: ${(props) => (props.variety === "title" ? 600 : "unset")};
  margin-right: 20px;
`;
