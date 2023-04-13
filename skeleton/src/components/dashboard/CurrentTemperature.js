import * as React from "react";
import BaseCard from "../baseCard/BaseCard";
import { Grid } from "@mui/material";
import FeatherIcon from "feather-icons-react";
import { ListItemIcon } from "@mui/material";
import { useState, useEffect } from "react";


const CurrentTemperature = () => {
    const [temperature, setTemperature] = useState(null);
    
    useEffect(() => {
      const tempApiKey = process.env.NEXT_PUBLIC_TEMP_API_KEY;
      const tempApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ottawa&appid=${tempApiKey}&units=metric`;
  
      fetch(tempApiUrl)
        .then(response => response.json())
        .then(data => {
          const currentTemperature = data.main.temp;
          setTemperature(currentTemperature);
        })
        .catch(error => console.log(error));
    }, []);

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
                  icon="thermometer"
                  width="40"
                  height="40"
                />
            </ListItemIcon>
          </div>
        </Grid>
        <Grid item style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {temperature && <h1 style={{ margin: 0 }}>{temperature}°C</h1>}
          <p style={{ color: "#999", opacity: 0.7, margin: 0 }}>Current Temperature</p>
        </Grid>
      </Grid>
    </BaseCard>
  );
};

export default CurrentTemperature;
