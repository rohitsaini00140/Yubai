import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";

function Discover3() {
  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Content */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "24px", sm: "34px" },
                fontWeight: 600,
                mt: { xs: "30px", sm: "0px" },
                textAlign: "left",
              }}
            >
              Track your order
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ textAlign: "left", fontSize: { xs: "14px", sm: "16px" } }}
            >
              Stay informed every step of the way. Know when your products reach
              our warehouse in Dubai, when they are shipped, when they arrive in
              Lebanon, and when they are out for delivery
            </Typography>
          </Box>
        </Grid>

        {/* Right Side - Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/images/basmati.jpg"
            alt="Discover Image"
            // sx={{
            //   width: { xs: "80%", md: "50%" },
            //   borderRadius: 2,
            //   height: { xs: "600px", md: "500px" },
            //   mt: "40px",
            // }}

            sx={{ width:{xs:"90%",md:'70%'}, borderRadius: 2,height:{xs:"400px",md:"400px"},mt:"40px",  }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Discover3;
