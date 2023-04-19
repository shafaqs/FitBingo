import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import dynamic from "next/dynamic";
import BaseCard from "../baseCard/BaseCard";
import { useState, useEffect } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

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

const ExercisesPerDayStats = (props) => {
  console.log('ExercisesPerDayStats', props)
  const [data, setData] = useState([]);
  const userID = props.user.id;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/calcExerPerDay?userId=${userID}`);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [userID]);

  const series = [
    {
      name: 'Total Exercises',
      data,
    },
  ];

  return (
    <BaseCard title="Exercises Per Day Stats">
      {data && data.length > 0 ? (
        <Chart options={options} series={series} />
      ) : (
        <p>Loading...</p>
      )}
    </BaseCard>
  );
};

export default ExercisesPerDayStats;
