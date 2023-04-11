import Board from '@/modules/bingo';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import {useRouter} from 'next/router'
import { PrismaClient } from '@prisma/client';
import {
  Grid,
  Button,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";



export default function BingoBoard({ blogs }) {
  const router = useRouter();
  const { difficulty } = router.query;
  return (

    <Grid container spacing={0}>
    {/* ------------------------- row 1 ------------------------- */}
    <Grid item xs={12} lg={12}>
      <Head>
        <title>BingoFit</title>
      </Head>
      <Card>
        <CardContent>
          <Typography variant="h1">Play FitBingo</Typography>
          <Typography variant="body1">
            Difficulty Level:  {difficulty}!
          </Typography>
          <Board></Board>
        </CardContent>
      </Card>
    </Grid>
    </Grid>
  );
}
