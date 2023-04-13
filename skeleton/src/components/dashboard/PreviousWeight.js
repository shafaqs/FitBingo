import * as React from "react";
import BaseCard from "../baseCard/BaseCard";
import { Grid } from "@mui/material";
import FeatherIcon from "feather-icons-react";
import { ListItemIcon } from "@mui/material";


const PreviousWeight = () => {
    
  return (
    <BaseCard>
      <Grid container spacing={0}>
      {/* ------------------------- row 1 ------------------------- */}
        <Grid item xs={5} lg={5}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <ListItemIcon style={{ alignSelf: "center" }}>
                <FeatherIcon
                  style={{
                    color: "#03c9d7",
                  }}
                  icon="command"
                  width="40"
                  height="40"
                />
            </ListItemIcon>
          </div>
        </Grid>
        <Grid item style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={{ margin: 0 }}>75.6kg</h1>
          <p style={{ color: "#999", opacity: 0.7, margin: 0 }}>Previous Weight</p>
        </Grid>
      </Grid>
    </BaseCard>
  );
};

export default PreviousWeight;
