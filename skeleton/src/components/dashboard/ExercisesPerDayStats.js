import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import dynamic from "next/dynamic";
import BaseCard from "../baseCard/BaseCard";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ExercisesPerDayStats = () => {
  const options = {
    chart: {
      type: 'line',
      height: 200,
      foreColor: '#adb0bb',
      fontFamily: "'DM Sans',sans-serif",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: false,
      },
    },
    colors: ['#fb9678'],
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    markers: {
      size: 0,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        style: {
          cssClass: 'grey--text lighten-2--text fill-color',
        },
      },
    },
    yaxis: {
      show: true,
      height: 100,
      min: 0,
      max: 15,
      tickAmount: 3,
      labels: {
        style: {
          cssClass: 'grey--text lighten-2--text fill-color',
        },
      },
    },
    tooltip: {
      theme: 'dark',
    },
  };

  const series = [
    {
      name: 'Total Exercises',
      data: [5, 5, 2, 7, 4, 10, 15],
    },
  ];

  return (
    <BaseCard title="Exercises Per Day Stats">
      <Chart options={options} series={series} />
    </BaseCard>
  );
};

export default ExercisesPerDayStats;
