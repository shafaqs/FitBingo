import * as React from "react";
import BaseCard from "../baseCard/BaseCard";
import { Grid } from "@mui/material";
import FeatherIcon from "feather-icons-react";
import { ListItemIcon } from "@mui/material";
import { useState, useEffect } from "react";

const CompletedBingos = (props) => {
  const [completedBingos, setCompletedBingos] = useState(0);
  const userID = props.user.id;
  useEffect(() => {
    async function fetchCompletedBingos() {
      const response = await fetch(`/api/calCompletedBingos?userId=${userID}`);
      const { completedBingos } = await response.json();
      setCompletedBingos(completedBingos);
    }

    fetchCompletedBingos();
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
                  icon="check-circle"
                  width="40"
                  height="40"
                />
            </ListItemIcon>
          </div>
        </Grid>
        <Grid item style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={{ margin: 0 }}>{completedBingos}</h1>
          <p style={{ color: "#999", opacity: 0.7, margin: 0, fontSize: "0.8rem" }}>Completed Bingos</p>
        </Grid>
      </Grid>
    </BaseCard>
  );
};

export default CompletedBingos;
