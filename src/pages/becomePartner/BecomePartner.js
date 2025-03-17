import React from "react";
import { Typography, Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import FeatureSection from "./FeatureSection";
import FirstCard from "./FirstCard";
import Second from "./SecondCard";
import ThirdCard from "./ThirdCard";
import ForthCard from "./FourthCard";
import FifthCard from "./FifthCard";
import { Link } from "react-router-dom";

const BecomePartner = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "60vh", sm: "30vh" },
          backgroundImage: "url('/images/Cover.jpg')",
          // backgroundImage: "url('/Logo/business-agreement.avif')",
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
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "24px", sm: "34px" },
            fontWeight: 600,
            mt: { xs: "30px", sm: "0px" },
          }}
        >
          Partner with Us
        </Typography>
        <Typography sx={{ color: "black", mt: "10px",textAlign:"left",lineHeight:"25px"}}>
        Changes in become a partner Join us in revolutionizing the Lebanese market by becoming a valued partner! Our platform bridges the gap between the UAE and Lebanon, offering customers access to a curated selection of products from Dubai’s top retailers. By partnering with us, you’ll gain exposure to a growing audience in Lebanon, seamless logistics for cross-border shipping, and a collaborative approach to expanding your reach. Together, we can bring the best of the UAE to Lebanon while creating new opportunities for growth and success. Let’s build something extraordinary—partner with us today!
        </Typography>

        <Link to="/contact">
          <Button variant="contained" sx={{ marginTop: 2, bgcolor: "#ce352f" }}>
            Get Started
          </Button>
        </Link>

        <FeatureSection />
        {/* <PartnerSection /> */}

        {/* <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "24px", sm: "34px" },
              fontWeight: 600,
              mt: { xs: "30px", sm: "0px" },
            }}
          >
            What our partners say
          </Typography>
          <FirstCard />
          <Second />
          <ThirdCard />
          <ForthCard />
          <FifthCard />
        </Box> */}
      </Box>
    </>
  );
};

export default BecomePartner;
