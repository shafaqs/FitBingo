import * as React from "react";
import BaseCard from "../baseCard/BaseCard";
import { Grid } from "@mui/material";
import FeatherIcon from "feather-icons-react";
import { ListItemIcon } from "@mui/material";
import { useEffect, useState } from "react";

const XpEarned = () => {
  const [experiencePoints, setExperiencePoints] = useState(0);
  const userID = 1; //using userID 1 as an example

  useEffect(() => {
    async function calculateXP() {
      const response = await fetch(`/api/calculateXP?userId=${userID}`);
      const {experiencePoints} = await response.json();
      setExperiencePoints(experiencePoints);
    };

    calculateXP();
  }, [userID]);

  return (
    <BaseCard>
      <Grid container spacing={0}>
      {/* ------------------------- row 1 ------------------------- */}
        <Grid item xs={5} lg={5}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <ListItemIcon style={{ alignSelf: "center" }}>
                <FeatherIcon
                  style={{
                    color: "#fb9678",
                  }}
                  icon="hash"
                  width="40"
                  height="40"
                />
            </ListItemIcon>
          </div>
        </Grid>
        <Grid item style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={{ margin: 0 }}> {experiencePoints} </h1>
          <p style={{ color: "#999", opacity: 0.7, margin: 0 }}>XP Earned</p>
        </Grid>
      </Grid>
    </BaseCard>
  );
};

export default XpEarned;
