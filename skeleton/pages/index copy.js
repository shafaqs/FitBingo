import { Grid } from "@mui/material";
import BlogCard from "../src/components/dashboard/BlogCard";
import SalesOverview from "../src/components/dashboard/SalesOverview";
import MotivationQuotes from "../src/components/dashboard/MotivationQuotes";
import ProductPerfomance from "../src/components/dashboard/ProductPerfomance";

export default function Index() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <MotivationQuotes />
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
