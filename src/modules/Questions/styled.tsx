import styled from "styled-components";
import { screens, colors } from "./../../constants/constants";

export const BackgroundStyled = styled.div<{source: string}>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background: url(${(props) => props.source});
  background-repeat: no-repeat;
  background-origin: content-box;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  display: flex;
    @media (max-width: ${screens.sm}) {
background: ${colors.yellow};
  }
`;

export const BlockStyled = styled.div`
  max-width: 950px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  margin: auto;
      @media (max-width: ${screens.sm}) {
    max-width: 100%;
  }
`;

export const FooterStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 1005;
  height: 138px;
  background-color: #ffffff;
  font-size: 30px;
  line-height: 138px;
  padding-left: 48px;
  @media (max-width: ${screens.sm}) {
    font-size: 20px;
  }
`;

export const LogoStyled = styled.img`
  position: absolute;
  right: 50px;
  top: -50px;
  @media (max-width: ${screens.sm}) {
    top: unset;
  right: -30px;
  bottom: -50px
  }
`;
export const ButtonsStyled = styled.div`
display: flex;
    @media (max-width: ${screens.sm}) {
    flex-direction: column;
    padding: 20px;
  }

`;
