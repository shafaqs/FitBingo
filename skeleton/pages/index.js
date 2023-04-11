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
import BlogCard from "../src/components/dashboard/BlogCard";
import SalesOverview from "../src/components/dashboard/SalesOverview";
import DailyActivity from "../src/components/dashboard/DailyActivity";
import ProductPerfomance from "../src/components/dashboard/ProductPerfomance";
import { PrismaClient } from '@prisma/client';

export default function Index() {
  return ( 
    <Grid container spacing={0}>
      <Head>
        <title>BingoFit</title>
      </Head>
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid>
      <Grid item xs={12} lg={8}>
        <ProductPerfomance />
      </Grid>
      <Grid item xs={12} lg={12}>
        <BlogCard />
      </Grid>
    </Grid>
  );
}



