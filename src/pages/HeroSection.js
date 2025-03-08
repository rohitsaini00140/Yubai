import { Button, Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Discover from "../component/Discover";
import Discover2 from "../component/Discover2";
import Discover3 from "../component/Discover3";
import Card from "../component/Card";
import AppDownloadSection from "../component/AppDownloadSection";

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "50vh",
          backgroundImage: "url('/images/banner.jpg')",
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
            sx={{ fontWeight: "bold", color: "#fff", mb: 2 }}
          >
           Delivering Hapiness
          </Typography>

          <Link href="/contact">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ce352f",
              color: "#fff",
              height:"35px",
              fontSize: "18px",
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#ce352f" },
            }}
          >
            GET THE APP
          </Button>
          </Link>
        </Container>
      </Box>
      <Discover />
      <Discover2 />
      <Discover3 />
      <Card />
      <AppDownloadSection />
    </>
  );
};

export default HeroSection;
