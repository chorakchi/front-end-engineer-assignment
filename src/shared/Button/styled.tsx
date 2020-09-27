import styled from "styled-components";
import { screens, colors } from "./../../constants/constants";


export const ButtonStyled = styled.div`
  background-color: ${colors.black};
  padding: 13px 48px;
  color: ${colors.yellow};
  font-size: 33px;
  margin-right: 20px;
  margin-top: 10px;
  
  cursor: pointer;
  &:hover {
    color: ${colors.black};
    background-color: ${colors.yellowLowOpacity};
  }
      @media (max-width: ${screens.sm}) {
        border: 1px solid black;
         font-size: 23px;
  }
`;
