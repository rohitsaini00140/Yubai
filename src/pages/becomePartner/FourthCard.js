import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";

function ForthCard() {
  return (
    <Container sx={{ mb: "30px" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="body1" sx={{fontWeight:600}}>
            ‘The process is smooth and the service is top-notch. Yubai is definitely the go-to platform for quality deliveries.’
            </Typography>

            <Typography color="textSecondary" sx={{mt:"10px"}}>
            Elie A., Head Chef at Mario e Mario
            </Typography>
          </Box>
        </Grid>

        {/* Right Side - Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/images/IMG.jpg"
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

export default ForthCard;
