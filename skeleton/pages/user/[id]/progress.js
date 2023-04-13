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
import BaseCard from "@/src/components/baseCard/BaseCard";

export default function Progress() {
  return (
    <Grid container spacing={0}>
      <Head>
        <title>BingoFit</title>
      </Head>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={12}>
        <BaseCard title="Current Bingo Board">
        
        </BaseCard>
      </Grid>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Completed Bingo Boards">
        
        </BaseCard>
      </Grid>
    </Grid>
  );
}
