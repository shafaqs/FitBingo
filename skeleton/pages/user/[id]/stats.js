import * as React from "react";
import Head from 'next/head';
import { Grid } from "@mui/material";
import ExercisesXPEarnedStats from "@/src/components/dashboard/ExercisesXPEarnedStats";
import ExercisesPerDayStats from "@/src/components/dashboard/ExercisesPerDayStats";
import CurrentWeight from "@/src/components/dashboard/CurrentWeight";
import PreviousWeight from "@/src/components/dashboard/PreviousWeight";
import { PrismaClient } from '@prisma/client';

export default function Stats({ user }) {
  console.log('stats page',user);
  return (
    <Grid container spacing={0}>
      <Head>
        <title>BingoFit</title>
      </Head>
        {/* <Card>
          <CardContent>
            <Typography variant="h1">Statistics Page</Typography> */}
            <Grid item xs={12} lg={12}>
              <ExercisesXPEarnedStats user={user}/>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={8} lg={8}>
              <ExercisesPerDayStats user={user}/>
            </Grid>
            <Grid item xs={4} lg={4}>
              <CurrentWeight />
              <PreviousWeight />
            </Grid>
          {/* </CardContent>
        </Card>
      </Grid> */}
    </Grid>
  );
}

export async function getServerSideProps({ params }) {
  const prisma = new PrismaClient()
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id)
    },
  })
  return {
    props: { user }
  }
}