import React from "react";
import { Step, Controls } from "react-decision-tree-flow";
import { content, tickets } from "./../../constants/constants";
import { Button, Typography, Ticket } from "./../../shared";
import { TreeType } from "./../../model/types";

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
        <Typography variety="header">{content[name + "Content"]}</Typography>
        <br />
        <Controls>
          {({ destinations: { ...arg }, back }) => (
            <div>
              <div style={{ display: "flex" }}>
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
              </div>
            </div>
          )}
        </Controls>
      </div>
    </Step>
  );
};
