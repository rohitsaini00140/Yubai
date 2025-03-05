import React from "react";
import { Typography, Button } from "@mui/material";
import { Box, Container} from "@mui/system";
import FeatureSection from "./FeatureSection";
import PartnerSection from "./PartnerSection";
import FirstCard from "./FirstCard";
import Second from "./SecondCard";
import ThirdCard from "./ThirdCard";
import ForthCard from "./FourthCard";
import FifthCard from "./FifthCard";

const BecomePartner = () => {
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
            Fast & easy delivery.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ padding: { xs: "20px", sm: "50px", md: "50px" } }}>
        <Typography variant="h3" sx={{fontSize:{xs:"24px",sm:"34px"},fontWeight:600,mt:{xs:"30px",sm:'0px'}}}>
        Partner with Us
        </Typography>
        <Typography sx={{ color: "black",mt:"10px"}}>
          We offer an end-to-end logistics service that makes it incredibly easy
          to deliver to customers everywhere.
        </Typography>
        <Button variant="contained" sx={{ marginTop: 2, bgcolor: "#ce352f" }}>
          Get Started
        </Button>

        <FeatureSection />
        <PartnerSection />

        <Box>
          <Typography variant="h3" sx={{fontSize:{xs:"24px",sm:"34px"},fontWeight:600,mt:{xs:"30px",sm:'0px'}}} >What our partners say</Typography>
          <FirstCard/>
          <Second/>
        <ThirdCard/>
        <ForthCard/>
        <FifthCard/>
        </Box>
      </Box>
    </>
  );
};

export default BecomePartner;
