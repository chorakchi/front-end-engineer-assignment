
import { TreeType, 
 ContentType,
 TicketsType,
 } from "./../model/types"; 

export const tree : TreeType  = {
  start: ["stayForOneDay", "stayForOneWeek", "stayForOneMonth"],
  stayForOneDay: ["withReturn", "WithoutReturn"],
  stayForOneWeek: ["OneWeekTicketWithBike", "OneWeekTicketWithoutBike"],
  stayForOneMonth: ["OneMonthTicketTenAM", "OneMonthTicket"],
  WithoutReturn: ["shortTripTicket", "singleTicket"],
  withReturn: ["fourShortTripTicket", "fourSingleTicket", "fullDayTicket"],
  shortTripTicket: ["start"],
  singleTicket: ["start"],
  fullDayTicket: ["start"],
  fourShortTripTicket: ["start"],
  fourSingleTicket: ["start"],
  OneWeekTicketWithBike: ["start"],
  OneWeekTicketWithoutBike: ["start"],
  OneMonthTicketTenAM: ["start"],
  OneMonthTicket: ["start"],
};

export const content : ContentType = {
  stayForOneDay: "One day",
  stayForOneWeek: "One week",
  stayForOneMonth: "At least one month",
  WithoutReturn: "No",
  withReturn: "Yes",
  shortTripTicket: "less than 20 min",
  singleTicket: "less than 2 ohers",
  fullDayTicket: "more than 2 ohers",
  fourShortTripTicket: "less than 20 min",
  fourSingleTicket: "less than 2 ohers",
  OneWeekTicketWithBike: "Yes",
  OneWeekTicketWithoutBike: "No",
  OneMonthTicketTenAM: "One Month Ticket 10 AM",
  OneMonthTicket: "One Month Ticket",
  back: "Back",
  start: "Restart",
  wellcomeContent: "Wellcome to Berlin",
  startContent: "How long will you stay in Berlin?",
  stayForOneDayContent: "are you have return?",
  stayForOneWeekContent: "are you have bike in your trip?",
  stayForOneMonthContent: "are you start your trip befor 10 am?",
  WithoutReturnContent: "duration of yuor trip in the day?",
  withReturnContent: "duration of yuor any single trip?",
  shortTripTicketContent: "Your journey is without return \nYou will stay in Berlin for one day \nYour journey is less than 20 minutes",
  singleTicketContent: "Your journey is with return \nYou will stay in Berlin for one day \nYour journey is less than 2 hours",
  fourShortTripTicketContent: "Your journey is with return \nYou will stay in Berlin for one day \nYour journey is more than 20 minute",
  fourSingleTicketContent: "Your journey is with return \nYou will stay in Berlin for one day \nYour journey is more than 2 hours",
  fullDayTicketContent: "Your journey is with return \nYou will stay in Berlin for one day \nYour journey is more than 2 hours",
  OneWeekTicketWithBikeContent: "You have a bike in your journey. \nYou will stay in Berlin for one week.",
  OneWeekTicketWithoutBikeContent: "You don't have a bike in your journey. \nYou will stay in Berlin for one week.",
  OneMonthTicketTenAMContent: "Your journey will not start before 10 AM. \nYou will stay in Berlin for one month.",
  OneMonthTicketContent: "Your journey will start before 10 AM. \nYou will stay in Berlin for one month.",
};

export const tickets : TicketsType = {
  shortTripTicket: [
    {
      label: "Short Trip",
      area: "Berlin AB",
      price: "1.90",
    },
  ],
  singleTicket: [
    {
      label: "single",
      area: "Berlin AB",
      price: "2.90",
    },
  ],
  fullDayTicket: [
    {
      label: "Full Day",
      area: "Berlin AB",
      price: "8.60",
    },
  ],
  fourShortTripTicket: [
    {
      label: "four Short Trip",
      area: "Berlin AB",
      price: "5.60",
    },
  ],
  fourSingleTicket: [
    {
      label: "four Single Trip",
      area: "Berlin AB",
      price: "12.00",
    },
  ],
  OneWeekTicketWithBike: [
    {
      label: "One Week",
      area: "Berlin AB",
      price: "34.00",
    },
    {
      label: "One Week Bike",
      area: "Berlin AB",
      price: "8.00",
    },
  ],
  OneWeekTicketWithoutBike: [
    {
      label: "One Week",
      area: "Berlin AB",
      price: "34.00",
    },
  ],
  OneMonthTicketTenAM: [
    {
      label: "Monthly, 10 AM",
      area: "Berlin AB",
      price: "61.00",
    },
  ],
  OneMonthTicket: [
    {
      label: "Monthly",
      area: "Berlin AB",
      price: "84.00",
    },
  ],
};

export const  screens: {[key: string]: string} = {
  sm: "576px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
  xxl: "1920px",
};

export const colors: {[key: string]: string} = {
  yellow: '#ffeb00',
  yellowLowOpacity: '#ffeb0099',
  black: '#000000'
}
