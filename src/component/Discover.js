import React from "react";
import { Container, Typography, Box,Grid } from "@mui/material";


function Discover() {
  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Content */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Discover your favorite stores
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{textAlign:"left"}}>
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
            src="/images/Yubai.png"
            alt="Discover Image"
            sx={{ width:{xs:"80%",md:'50%'}, borderRadius: 2,height:{xs:"600px",md:"500px"},mt:"40px" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Discover;
