import React from "react";
import { Wizard } from "react-decision-tree-flow";
import { tree } from "./../../constants/constants";
import {
  BackgroundStyled,
  BlockStyled,
  FooterStyled,
  LogoStyled,
} from "./styled";
import { WrappStep } from "./WrappStep";
import bvgBackground from "./../../assets/bvg-background.svg";
import bvglogo from "./../../assets/berlin-er-verkehrsbetriebe-bvg-vector-logo.svg";

export const Questions = () => {
  return (
    <BackgroundStyled source={bvgBackground}>
      <Wizard tree={tree} first="start">
        <FooterStyled>
          WEIL WIR DICH LIEBEN.
          <LogoStyled src={bvglogo} />
        </FooterStyled>
        <BlockStyled>
          {Object.keys(tree).map((item: string) => (
            <WrappStep key={item} data={{ [item]: tree[item] }} />
          ))}
        </BlockStyled>
      </Wizard>
    </BackgroundStyled>
  );
};
