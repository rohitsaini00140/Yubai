import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";

function ThirdCard() {
  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Content */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/images/Untitled1.png"
            alt="Discover Image"
            sx={{
              width: { xs: "90%", md: "70%" },
              borderRadius: 1,
              height: { xs: "300px", md: "250px" },
              mt: "40px",
            }}
          />
        </Grid>

        {/* Right Side - Image */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              ‘Yubai’ online delivery platform has allowed us to provide our
              customers with their favorite Meat the Fish dishes in the
              convenience of their own homes. They offer a reliable and fast
              delivery service which we highly recommend to anyone looking for a
              hassle-free experience.’
            </Typography>

            <Typography color="textSecondary" sx={{mt:"10px"}}>
            Riad al Hout, Assistant Floor Manager at Meat The Fish
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ThirdCard;
