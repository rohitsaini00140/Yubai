import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";

function Second() {
  return (
    <Container sx={{ mb: "30px" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              ‘At Burger King, the customer comes first. Quality , Service, and
              Cleanliness is something we don’t compromise on, we choose our
              suppliers very carefully to support us in delivering the highest
              level of fresh and high quality food. We want to Thank Yubai for
              playing a major role in delivering The King’s flame grilling
              burgers’
            </Typography>

            <Typography color="textSecondary" sx={{mt:"10px"}}>
              Michel J. Hanna, General Manager at Burger King – Lebanon
            </Typography>
          </Box>
        </Grid>

        {/* Right Side - Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/images/Untitled.png"
            alt="Discover Image"
            sx={{
              width: { xs: "90%", md: "70%" },
              borderRadius: 1,
              height: { xs: "300px", md: "250px" },
              mt: "40px",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Second;
