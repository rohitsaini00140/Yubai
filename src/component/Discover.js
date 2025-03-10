import React from "react";
import { Container, Typography, Box,Grid } from "@mui/material";


function Discover() {
  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
  
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h2" gutterBottom sx={{fontSize:{xs:"24px",sm:"34px"},fontWeight:600,mt:{xs:"30px",sm:'0px'},textAlign:'left'}}>
              Discover your favorite stores
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
              From coffee to Italian food, fresh groceries, and electronics,
              we’ve got all your favorite restaurants and stores all in one
              place.
            </Typography>
          </Box>
        </Grid>

        {/* Right Side - Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/images/Dove.jpg"
            alt="Discover Image"
            // sx={{ width:{xs:"80%",md:'50%'}, borderRadius: 2,height:{xs:"400px",md:"500px"},mt:"40px",objectFit: "contain",   }}
            sx={{ width:{xs:"80%",md:'60%'}, borderRadius: 2,height:{xs:"400px",md:"400px"},mt:"40px",  }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Discover;
