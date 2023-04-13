import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import BaseCard from "../baseCard/BaseCard";

const activities = [
  {
    day: "Mon",
    color: "success.main",
    text: "Meeting with John",
  },
  {
    day: "Tue",
    color: "secondary.main",
    text: "Payment received from John Doe of $385.90",
  },
  {
    day: "Wed",
    color: "primary.main",
    text: "Project Meeting",
  },
  {
    day: "Thu",
    color: "warning.main",
    text: "New Sale recorded #ML-3467",
  },
  {
    day: "Fri",
    color: "error.main",
    text: "Payment was made of $64.95 to Michael Anderson",
  },
  {
    day: "Sat",
    color: "success.main",
    text: "Payment was made of $64.95 to Michael Anderson",
  },
  {
    day: "Sun",
    color: "secondary.main",
    text: "Payment was made of $64.95 to Michael Anderson",
  },
];

const DailyActivity = () => {
  return (
    <BaseCard title="Daily Activity">
      <Timeline
        sx={{
          p: 0,
        }}
      >
        {activities.map((activity) => (
          <TimelineItem key={activity.day}>
            <TimelineOppositeContent
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                flex: "0",
              }}
            >
              {activity.day}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                sx={{
                  borderColor: activity.color,
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
              {activity.text}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </BaseCard>
  );
};

export default DailyActivity;
