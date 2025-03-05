import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";

function Discover2() {
  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Content */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/images/Yubai.png"
            alt="Discover Image"
            sx={{ width:{xs:"80%",md:'50%'}, borderRadius: 2,height:{xs:"600px",md:"500px"},mt:"40px" }}
          />
        </Grid>

        {/* Right Side - Image */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" sx={{fontSize:{xs:"24px",sm:"34px"},fontWeight:600,mt:{xs:"30px",sm:'0px'},textAlign:'left'}}>
              Order with one click
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
              Get what you want, the way you want it, exactly when you want it
              and pay by card or cash. Delivery has never been this easy.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Discover2;
