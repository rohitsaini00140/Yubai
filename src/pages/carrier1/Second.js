import React from "react";
import { Container, Typography, Box,Grid } from "@mui/material";


function Second() {
  return (
    <Container sx={{mb:"30px"}}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{textAlign:"left"}}>
            <Typography variant="h4" gutterBottom  >
              Discover your favorite stores
            </Typography>
            <Typography variant="body1" color="textSecondary">
              From coffee to Italian food, fresh groceries, and electronics,
              we’ve got all your favorite restaurants and stores all in one
              place.
            </Typography>
          </Box>
        </Grid>

        {/* Right Side - Image */}
        <Grid item xs={12} md={6} >
          <Box
            component="img"
            src="/images/sticker.jpg"
            alt="Discover Image"
            sx={{ width:{xs:"80%",md:'70%'}, borderRadius: 1,height:{xs:"300px",md:"250px"},mt:"40px" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Second;
