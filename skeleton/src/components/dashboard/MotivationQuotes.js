import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import BaseCard from "../baseCard/BaseCard";
import { useState, useEffect } from "react";

const MotivationQuotes = () => {
  const [quotes, setQuotes] = useState([
    {
      day: "",
      color: "secondary.main",
      text: "",
    },
  ]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let randomIndex = Math.floor(Math.random() * 1000);
        setQuotes((prevState) => [
          {
            ...prevState[0],
            text: data[randomIndex].text,
          },
        ]);
      });
  }, []);

  return (
    <BaseCard title="✌️ Motto of the Day 😊">
      <Timeline sx={{ p: 0 }}>
        {quotes.map((quote) => (
          <TimelineItem key={quote.day}>
            <TimelineOppositeContent
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                flex: "0",
              }}
            >
              {quote.day}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                sx={{
                  borderColor: quote.color,
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              color="text.secondary"
              sx={{
                fontSize: "14px",
              }}
            >
              {quote.text}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </BaseCard>
  );
};

export default MotivationQuotes;

// const quotes = [
//   {
//     day: "Mon",
//     color: "success.main",
//     text: "",
//   },
//   {
//     day: "Tue",
//     color: "secondary.main",
//     text: "",
//   },
//   {
//     day: "Wed",
//     color: "primary.main",
//     text: "The power of intuitive understanding will protect you from harm until the end of your days.",
//   },
//   {
//     day: "Thu",
//     color: "warning.main",
//     text: "The harder you fall, the higher you bounce.",
//   },
//   {
//     day: "Fri",
//     color: "error.main",
//     text: "Love is the only force capable of transforming an enemy into friend.",
//   },
//   {
//     day: "Sat",
//     color: "success.main",
//     text: "  ",
//   },
//   {
//     day: "Sun",
//     color: "secondary.main",
//     text: "  ",
//   },
// ];


  

