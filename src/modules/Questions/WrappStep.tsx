import React from "react";
import { Step, Controls } from "react-decision-tree-flow";
import { content, tickets } from "./../../constants/constants";
import { Button, Typography, Ticket } from "./../../shared";
import { TreeType } from "./../../model/types";
import {ButtonsStyled } from './styled'

type WrappStepProps = {
  data: TreeType
}

export const WrappStep = ({ ...props }) => {
  const name = Object.keys(props.data)[0];
  const TicketFlag = name.includes("Ticket") || false;
  return (
    <Step name={name}>
      {TicketFlag && <Ticket data={tickets[name]} />}
      <div>
        {name === "start" ? (
          <Typography variety="title">{content.wellcomeContent}</Typography>
        ) : (
          ""
        )}
        {TicketFlag ? 
        <Typography variety= "body" >
        {"Your decision: \n" + content[name + "Content"]}</Typography>:
        <Typography variety= "header">
        {content[name + "Content"]}</Typography>
        }
        <br />
        <Controls>
          {({ destinations: { ...arg }, back }) => (
              <ButtonsStyled >
                {props.data[name].map((item : string) => (
                  <Button
                    key={item}
                    onClick={arg[item]}
                    label={content[item]}
                  />
                ))}
                {name !== "start" ? (
                  <Button onClick={back} label={content.back} />
                ) : (
                  ""
                )}
              </ButtonsStyled>
          )}
        </Controls>
      </div>
    </Step>
  );
};
