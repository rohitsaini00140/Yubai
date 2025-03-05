import React from "react";
import { Container, Grid, Typography, Button, Box,} from "@mui/material";

const partners = [
  { name: "Roadster", src:"/partnerlogo/Stores-01.png" },
  { name: "Zaatar w Zeit", src: "/partnerlogo/Stores-03.png" },
  { name: "McDonald's", src: "/partnerlogo/Stores-04.png" },
  { name: "Bartartine", src: "/partnerlogo/Stores-05.png" },
  { name: "KFC", src: "/partnerlogo/Stores-06.png" },
  { name: "Meat the Fish", src: "/partnerlogo/Stores-07.png" },
  { name: "Al Tawkouk", src: "/partnerlogo/Stores-08.png" },
  { name: "Divvy", src: "/partnerlogo/Stores-11 (1).png" },
  { name: "Dunkin'", src: "/partnerlogo/Stores-10.png" },
  { name: "Burger King", src: "/partnerlogo/Stores-12.png" },
  { name: "Kampai", src: "/partnerlogo/Stores-12 (1).png" },
  { name: "Hardee's", src: "/partnerlogo/Stores-04 (1).png" }
];

const PartnersSection = () => {
  return (
    <Container sx={{ textAlign: "center", py: 4 }}>
      <Typography variant="h5" fontWeight="bold">
        Join the best in the industry
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" mb={4}>
        4,000+ partners. Hundreds of thousands of customers.
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        {partners.map((partner, index) => (
          <Grid item key={index} xs={4} sm={3} md={2}>
            <img
              src={partner.src}
              alt={partner.name}
              style={{width: "120px", height:"120px", boxShadow: 2, bgcolor: "white"}}
            />
          </Grid>
        ))}
      </Grid>

      <Box mt={4}>
        <Button variant="contained" color="primary"  size="large"  sx={{bgcolor:"#ce352f"}}>
          JOIN NOW
        </Button>
      </Box>
    </Container>
  );
};

export default PartnersSection;
