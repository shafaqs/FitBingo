import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import dynamic from "next/dynamic";
import BaseCard from "../baseCard/BaseCard";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useEffect, useState } from "react";

const ExercisesXPEarnedStats = (props) => {
  const [experiencePoints, setExperiencePoints] = useState([]);
  const userID = props.user.id; 

  useEffect(() => {
    async function calMonthlyXP () {
      const response = await fetch(`/api/calMonthlyXP?userId=${userID}`);
      const { experiencePoints } = await response.json();
      const experiencePointsArray = Object.values(experiencePoints);
      setExperiencePoints(experiencePointsArray); // ✅
    };
    calMonthlyXP();
  }, [userID]);

  const monthlyExercises = experiencePoints.map(i => i / 100);



  const optionssalesoverview = {
    grid: {
      show: true,
      borderColor: "transparent",
      strokeDashArray: 2,
      padding: {
        left: 0,
        right: 0,
        bottom: 0,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "42%",
        endingShape: "rounded",
        borderRadius: 5,
      },
    },

    colors: ["#fb9678", "#03c9d7"],
    fill: {
      type: "solid",
      opacity: 1,
    },
    chart: {
      offsetX: -15,
      toolbar: {
        show: false,
      },
      foreColor: "#adb0bb",
      fontFamily: "'DM Sans',sans-serif",
      sparkline: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    legend: {
      show: false,
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: [{
      show: true,
      min: 0,
      max: 20,
      tickAmount: 2,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
      title: {
        text: "Number of Exercises Completed"
      }
    },
    {
      show: true,
      min: 0,
      max: 1800,
      tickAmount: 10,
      opposite: true,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
      title: {
        text: "Experience Points Earned"
      }
    },
  ],
    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    tooltip: {
      theme: "dark",
    },
  };
  const seriessalesoverview = [
    {
      name: "Total Exercises",
      data: monthlyExercises,
    },
    {
      name: "XP Earned",
      data: experiencePoints,
    },
  ];
  return (
    <BaseCard title="Exercises - XP Earned Stats">
      <Chart
        options={optionssalesoverview}
        series={seriessalesoverview}
        type="bar"
        height="295px"
      />
    </BaseCard>
  );
};

export default ExercisesXPEarnedStats;
