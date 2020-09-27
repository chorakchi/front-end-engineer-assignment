import React from "react";
import { TicketStyled } from "./styled";
import {TicketType} from './../../model/types'

type TicketPropsType = {data:Array<TicketType>}

export const Ticket = (props: TicketPropsType) => {
  return (
    <TicketStyled>
      {props.data.map((item : TicketType) => (
        <svg key={item.label} height="418.999" viewBox="0 0 430 596.999" style={{margin: 'auto'}}>
          <defs>
            <filter
              id="Union_1"
              x="0"
              y="0"
              width="430"
              height="596.999"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="3"  />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood floodOpacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g
            id="Group_3"
            data-name="Group 3"
            transform="translate(-792 -248.001)"
          >
            <g transform="matrix(1, 0, 0, 1, 792, 248)" filter="url(#Union_1)">
              <path
                id="Union_1-2"
                data-name="Union 1"
                d="M-1547,551V535h-72v16h-170V-28h170v16h72V-28h170V551Z"
                transform="translate(1798 34)"
                fill="#deded6"
              />
            </g>
            <path
              id="Intersection_1"
              data-name="Intersection 1"
              d="M-1789,128V-28h170v16h72V-28h170V128Z"
              transform="translate(2590 281.999)"
              fill="#d0cdbc"
            />
            <rect
              id="Rectangle_14"
              data-name="Rectangle 14"
              width="204"
              height="41"
              transform="translate(822 753)"
              fill="#f8d6b3"
            />
            <g id="Bvg-logo" transform="translate(1117.614 756.899)">
              <rect
                id="back"
                width="51.047"
                height="52.155"
                transform="translate(0 0)"
                fill="#f0d723"
              />
              <path
                id="BVG"
                d="M96.043,381.191c0,1.583-.224,3.022-2.305,3.022h-1.29v-6.042h1.006C95.819,378.171,96.043,379.466,96.043,381.191Zm-.224-8.27c0,1.222-.069,2.733-2.512,2.733h-.86v-5.393h1.075C95.535,370.262,95.819,370.98,95.819,372.922Zm3.957,8.128c0-1.942-.929-4.1-3.665-4.244,2.512-.505,3.166-2.3,3.166-4.315,0-2.516-.654-4.816-5.179-4.816H90.357a1.456,1.456,0,0,0-1.505,1.435v16.4c0,1.008.645,1.295,1.505,1.295h3.45C98.7,386.8,99.776,384.069,99.776,381.049Zm13.738-11.075c.353-1.51-.508-2.444-1.66-2.444a1.778,1.778,0,0,0-1.789,1.652l-2.09,10.786a27.09,27.09,0,0,0-.43,3.022,27.092,27.092,0,0,0-.43-3.022l-2.305-10.786a1.826,1.826,0,0,0-1.867-1.652c-1.368,0-2.013,1.221-1.66,2.66l3.527,14.6a2.511,2.511,0,0,0,2.736,2.228c1.437,0,2.3-.79,2.658-2.373l3.312-14.669ZM127.1,382.99v-5.681c0-1.151-.353-1.654-1.437-1.654H122.5c-1.015,0-1.514.5-1.514,1.438a1.328,1.328,0,0,0,1.514,1.365h1.075v5.536a3.788,3.788,0,0,1-1.222.146c-2.521,0-3.742-1.223-3.742-6.545,0-5.68,1.445-6.976,3.6-6.976,1.652,0,2.443.576,3.235.576a1.521,1.521,0,0,0,1.514-1.508,1.577,1.577,0,0,0-.508-1.153,7.868,7.868,0,0,0-4.164-1.08c-4.465,0-7.338,2.95-7.338,9.853,0,6.542,1.3,9.707,6.977,9.707,3.518,0,5.17-1.223,5.17-4.026"
                transform="translate(-82.451 -340.987)"
              />
            </g>
            <text
              id="_238029_0368"
              data-name="238029 0368"
              transform="translate(837 806)"
              fontSize="30"
              fontFamily="HelveticaNeue, Helvetica Neue"
            >
              <tspan x="0" y="0">
                {Math.floor(Math.random() * 899999 + 100000)} 0368
              </tspan>
            </text>
            <text
              id="_4-Fahrten-Karte"
              data-name="4-Fahrten-Karte"
              transform="translate(840 447)"
              fontSize="29"
              fontFamily="HelveticaNeue-Bold, Helvetica Neue"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                {item.label}
              </tspan>
            </text>
            <text
              id="Berlin_AB"
              data-name="Berlin AB"
              transform="translate(844 530)"
              fontSize="23"
              fontFamily="HelveticaNeue-Bold, Helvetica Neue"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                {item.area}
              </tspan>
            </text>
            <g id="layer1" transform="translate(512.926 1.248)">
              <path
                id="path4090"
                d="M348.678,479.455a27.531,27.531,0,0,1-25.6-17.429h6.79a21.344,21.344,0,0,0,18.814,11.266v6.164"
                transform="translate(0 -134.703)"
                fill="#ec1b24"
              />
              <path
                id="path4092"
                d="M511.6,478.42a26.854,26.854,0,0,1-4.286,4.514l-3.964-4.722a20.777,20.777,0,0,0,3.338-3.49l4.912,3.7"
                transform="translate(-140.959 -144.631)"
                fill="#ec1b24"
              />
              <path
                id="path4094"
                d="M469.315,506.352a27.3,27.3,0,0,1-8.06,3.016l-1.214-6.05a21.487,21.487,0,0,0,6.24-2.333l3.034,5.367"
                transform="translate(-107.096 -165.166)"
                fill="#ec1b24"
              />
              <path
                id="path4096"
                d="M378.383,295.2a27.7,27.7,0,0,1,8.06-3.016l1.233,6.05a21.4,21.4,0,0,0-6.259,2.333l-3.035-5.367"
                transform="translate(-43.246 -1.904)"
                fill="#ec1b24"
              />
              <path
                id="path4098"
                d="M440.475,289.752a27.531,27.531,0,0,1,25.6,17.429h-6.79A21.324,21.324,0,0,0,440.475,295.9v-6.145"
                transform="translate(-91.797)"
                fill="#ec1b24"
              />
              <path
                id="path4100"
                d="M339.772,323.746a26.849,26.849,0,0,1,4.286-4.514l3.964,4.722a20.669,20.669,0,0,0-3.319,3.49l-4.931-3.7"
                transform="translate(-13.056 -23.051)"
                fill="#ec1b24"
              />
              <path
                id="path4102"
                d="M376.33,392.235c-.664,3-3.072,4.229-5.955,4.229h-6.031l3.357-14.793h5.766c3.186,0,4.722,1.347,4.172,3.774a4.406,4.406,0,0,1-2.712,3.376A2.733,2.733,0,0,1,376.33,392.235Zm-7.017,1.119.683-3.016h1.081c.91,0,1.309.512,1.081,1.5a1.845,1.845,0,0,1-1.991,1.517Zm14.509-5.822.626-2.826h.891c.816,0,1.309.417,1.081,1.366a1.83,1.83,0,0,1-2.01,1.46Zm5.709,4.7c-.683,3-3.091,4.229-5.974,4.229h-6.031l3.357-14.793h5.766c3.186,0,4.741,1.347,4.172,3.774a4.406,4.406,0,0,1-2.712,3.376A2.76,2.76,0,0,1,389.53,392.235Zm-7.036,1.119.683-3.016h1.1c.891,0,1.29.512,1.062,1.5a1.845,1.845,0,0,1-1.991,1.517Zm-20.805-11.683h4.8l-7.852,14.793h-4.817l-1.176-14.793h4.893l.057,8.895Zm8.952,5.86.626-2.826h.891c.815,0,1.309.417,1.081,1.366a1.83,1.83,0,0,1-2.01,1.46h-.588"
                transform="translate(-23.119 -71.873)"
                fill="#ec1b24"
                fillRule="evenodd"
              />
            </g>
            <rect
              id="Rectangle_15"
              data-name="Rectangle 15"
              width="412"
              height="24"
              transform="translate(1213 254) rotate(90)"
              fill="#f8d6b3"
            />
            <text
              id="Bitte_hier_entwerten"
              data-name="Bitte hier entwerten"
              transform="translate(966 309)"
              fontSize="20"
              fontFamily="HelveticaNeue, Helvetica Neue"
            >
              <tspan x="0" y="0">
                Bitte hier entwerten
              </tspan>
            </text>
            <text
              id="Please_validate_your_ticket"
              data-name="Please validate your ticket"
              transform="translate(931 336)"
              fontSize="20"
              fontFamily="HelveticaNeue, Helvetica Neue"
            >
              <tspan x="0" y="0">
                Please validate your ticket
              </tspan>
            </text>
            <text
              id="Nachdruck_verboten"
              data-name="Nachdruck verboten"
              transform="translate(1186 636) rotate(-90)"
              fontSize="18"
              fontFamily="HelveticaNeue, Helvetica Neue"
            >
              <tspan x="0" y="17">
                Nachdruck verboten
              </tspan>
            </text>
            <text
              id="_9.00_EUR"
              data-name="9.00 EUR"
              transform="translate(1059 574)"
              fontSize="23"
              fontFamily="HelveticaNeue-Bold, Helvetica Neue"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                {item.price} EUR
              </tspan>
            </text>
            <text
              id="_090318_1547"
              data-name="090318 1547"
              transform="translate(840 630)"
              fontSize="30"
              fontFamily="HelveticaNeue, Helvetica Neue"
            >
              <tspan x="0" y="0">
                {Math.round(+new Date() / 10000) +
                  " " +
                  Math.floor(Math.random() * 89 + 10)}
              </tspan>
            </text>
            <text
              id="Gemeinsamer_Tanz_der_im_Verkehrsverbund_Berlin-Brandenburg_zusammenwirkenden_Verkehrsunternehmen_ausgeben_durch_die_Deutsche_Bahn_AG"
              data-name="Gemeinsamer Tanz der im Verkehrsverbund Berlin-Brandenburg zusammenwirkenden Verkehrsunternehmen ausgeben durch die Deutsche Bahn AG"
              transform="translate(819 675)"
              fontSize="15"
              fontFamily="HelveticaNeue, Helvetica Neue"
            >
              <tspan x="0" y="14">
                Gemeinsamer Tanz der im Verkehrsverbund Berlin-
              </tspan>
              <tspan x="0" y="31">
                Brandenburg zusammenwirkenden{" "}
              </tspan>
              <tspan x="0" y="48">
                Verkehrsunternehmen ausgeben durch die Deutsche{" "}
              </tspan>
              <tspan x="0" y="65">
                Bahn AG
              </tspan>
            </text>
            <text
              id="_02541"
              data-name="02541"
              transform="translate(1076 630)"
              fontSize="30"
              fontFamily="HelveticaNeue, Helvetica Neue"
            >
              <tspan x="0" y="0">
                {Math.floor(Math.random() * 89999 + 10000)}
              </tspan>
            </text>
            <line
              id="Line_1"
              data-name="Line 1"
              x1="412"
              transform="translate(801.5 666.5)"
              fill="none"
              stroke="#c7c7c7"
              strokeWidth="1"
            />
          </g>
        </svg>
      ))}
    </TicketStyled>
  );
};
