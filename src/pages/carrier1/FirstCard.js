import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";

function FirstCard() {
  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Content */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/images/GrayGardens.jpg"
            alt="Discover Image"
            sx={{ width:{xs:"80%",md:'70%'}, borderRadius: 1,height:{xs:"300px",md:"250px"},mt:"40px" }}
          />
        </Grid>

        {/* Right Side - Image */}
        <Grid item xs={12} md={6}>
          <Box   sx={{textAlign:'left'}}>
            <Typography variant="h4" gutterBottom>
            Grow with us
            </Typography>
            <Typography variant="body1" color="textSecondary">
            Join a growing, fast-paced startup with a lot of opportunity for innovation and career advancement. Today you’re in our Beirut HQ; tomorrow you’re leading our launch in new cities.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FirstCard;
