import * as React from "react";
import Head from 'next/head';
import {
  Grid,
  Button,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import ExercisesXPEarnedStats from "@/src/components/dashboard/ExercisesXPEarnedStats";
import ExercisesPerDayStats from "@/src/components/dashboard/ExercisesPerDayStats";
import DailyActivity from "@/src/components/dashboard/DailyActivity";

export default function Stats() {
  return (
    <Grid container spacing={0}>
      <Head>
        <title>BingoFit</title>
      </Head>
        {/* <Card>
          <CardContent>
            <Typography variant="h1">Statistics Page</Typography> */}
            <Grid item xs={12} lg={12}>
              <ExercisesXPEarnedStats />
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={8} lg={8}>
              <ExercisesPerDayStats />
            </Grid>
            <Grid item xs={4} lg={4}>
              <DailyActivity />
            </Grid>
          {/* </CardContent>
        </Card>
      </Grid> */}
    </Grid>
  );
}
