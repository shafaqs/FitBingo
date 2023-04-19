import { Grid } from "@mui/material";
import Head from 'next/head';
import ExercisesXPEarnedStats from "../../../src/components/dashboard/ExercisesXPEarnedStats";
import XpEarned from "@/src/components/dashboard/XpEarned";
import { PrismaClient } from '@prisma/client';
import CompletedBingos from "@/src/components/dashboard/CompletedBingos";
import CompletedExercises from "@/src/components/dashboard/CompletedExercises";
import CurrentTemperature from "@/src/components/dashboard/CurrentTemperature";
import CurrentWeight from "@/src/components/dashboard/CurrentWeight";
import PreviousWeight from "@/src/components/dashboard/PreviousWeight";
import ExercisesPerDayStats from "@/src/components/dashboard/ExercisesPerDayStats";

export default function UserPage({ user }) {
  return ( 
    <Grid container spacing={0}>
      <Head>
        <title>BingoFit</title>
      </Head>
      <Grid item xs={4} lg={4}>
        <XpEarned />
      </Grid>
      <Grid item xs={4} lg={4}>
        <CompletedBingos user={user}/>
      </Grid>
      <Grid item xs={4} lg={4}>
        <CompletedExercises user={user}/>
      </Grid>
      {/* ------------------------- end of row 1 ------------------------- */}
      <Grid item xs={12} lg={12}>
        <ExercisesXPEarnedStats />
      </Grid>
      {/* ------------------------- end of row 2 ------------------------- */}
      <Grid item xs={8} lg={8}>
        <ExercisesPerDayStats user={user}/>
      </Grid>
      <Grid item xs={4} lg={4}>
        <CurrentTemperature/>
        <CurrentWeight/>
        <PreviousWeight/>
      </Grid>
      <Grid item xs={4} lg={4}>
        
      </Grid>
      <Grid item xs={4} lg={4}>
        
      </Grid>
      
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