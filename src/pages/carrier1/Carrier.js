import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Second from "./Second";
import FirstCard from "./FirstCard";



function Carrier() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "60vh", sm: "30vh" },
          backgroundImage: "url('/images/Cover.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "#fff", mb: 2, fontSize: "40px" }}
          >
            Become a part of the fastest growing tech startup in the region.
          </Typography>
        </Container>
      </Box>

      <Container
        sx={{ mt: "30px", padding: { xs: "10px 40px", sm: "10px 100px" } }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 600,mb:"20px"}}>OUR VISION</Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
            We’re here to bring people the things they love in the most
            convenient way possible. More life. Less hassle.
          </Typography>
        </Box>

        <Box sx={{ mt: "50px" }}>
          <Typography variant="h4" sx={{ fontWeight: 600,mb:"20px"}}>WHY WORK WITH US</Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
            We're a talented, hard-working bunch. We think outside the box, face
            challenges head on, and wear multiple hats to get the job done.
            We’re young, but mighty.
          </Typography>
          <Typography component={"p"} sx={{ mt: "10px" }}>
            Are you hungry too? Join us.
          </Typography>
        </Box>
      </Container>
   <FirstCard/>
      <Second />
      {/* 
<CarrierHeroSection/>
<PartnerSection/>
<Testimonials/> */}
    </>
  );
}

export default Carrier;
