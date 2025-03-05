import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";

function Discover3() {
  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Content */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4"  sx={{fontSize:{xs:"24px",sm:"34px"},fontWeight:600,mt:{xs:"30px",sm:'0px'},textAlign:'left'}}>
              Track your order in real-time
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
              Watch your order every step of the way, from the minute you place
              it, to when it’s outside your door.
            </Typography>
          </Box>
        </Grid>

        {/* Right Side - Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/images/Yubai.png"
            alt="Discover Image"
            sx={{ width:{xs:"80%",md:'50%'}, borderRadius: 2,height:{xs:"600px",md:"500px"},mt:"40px" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Discover3;
