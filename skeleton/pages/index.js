// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '@/styles/Home.module.css';
// import { PrismaClient } from '@prisma/client';


// export default function Home({ blogs }) {
//   return (
//     <div>
      // <Head>
      //   <title>BingoFit</title>
      // </Head>
//       <h1>Welcome to BingoFit!</h1>
//       <p>Play bingo and get fit.</p>
//     </div>
//   );
// }

import { Grid } from "@mui/material";
import Head from 'next/head';
import ExercisesXPEarnedStats from "../src/components/dashboard/ExercisesXPEarnedStats";
import ProductPerfomance from "../src/components/dashboard/ProductPerfomance";
import XpEarned from "@/src/components/dashboard/XpEarned";
import { PrismaClient } from '@prisma/client';
import CompletedBingos from "@/src/components/dashboard/CompletedBingos";
import CompletedExercises from "@/src/components/dashboard/CompletedExercises";
import CurrentTemperature from "@/src/components/dashboard/CurrentTemperature";
import CurrentWeight from "@/src/components/dashboard/CurrentWeight";
import PreviousWeight from "@/src/components/dashboard/PreviousWeight";
import ExercisesPerDayStats from "@/src/components/dashboard/ExercisesPerDayStats";


export default function Index() {
  return ( 
    <Grid container spacing={0}>
      <Head>
        <title>BingoFit</title>
      </Head>
      <Grid item xs={4} lg={4}>
        <XpEarned />
      </Grid>
      <Grid item xs={4} lg={4}>
        <CompletedBingos/>
      </Grid>
      <Grid item xs={4} lg={4}>
        <CompletedExercises/>
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={12}>
        <ExercisesXPEarnedStats />
      </Grid>
      {/* ------------------------- row 2 ------------------------- */}
      <Grid item xs={8} lg={8}>
        <ExercisesPerDayStats />
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
      
      {/* ------------------------- row 3 ------------------------- */}
      {/* <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid> */}
    </Grid>
  );
}



