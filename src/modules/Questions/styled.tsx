import styled from "styled-components";

export const BackgroundStyled = styled.div<{source: string}>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(${(props) => props.source});
  background-repeat: no-repeat;
  background-origin: content-box;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  display: flex;
`;

export const BlockStyled = styled.div`
  max-width: 950px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  color: #000000;
  margin: auto;
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
`;

export const LogoStyled = styled.img`
  position: absolute;
  right: 50px;
  top: -50px;
`;
