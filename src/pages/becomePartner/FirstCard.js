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
            src="/images/Theslow.png"
            alt="Discover Image"
            sx={{ width:{xs:"90%",md:'70%'}, borderRadius: 1,height:{xs:"300px",md:"250px"},mt:"40px" }}
          />
        </Grid>

        {/* Right Side - Image */}
        <Grid item xs={12} md={6}>
          <Box   sx={{textAlign:'left'}}>
          
            <Typography variant="body1" sx={{fontWeight:600}}>
            ‘We love that a place as small as ours can reach such a huge audience, with little effort, thanks to Yubai!’
            </Typography>

            <Typography color="textSecondary" sx={{mt:"10px"}}>
            Sari Kassouf, Owner of The Slow
          </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FirstCard;
