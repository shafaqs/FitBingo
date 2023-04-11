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

export default function Progress() {
  return (
    <Grid container spacing={0}>
      <Head>
        <title>BingoFit</title>
      </Head>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={12}>
        <Card>
          <CardContent>
            <Typography variant="h1">Progress Page</Typography>
            <Typography variant="body1">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
