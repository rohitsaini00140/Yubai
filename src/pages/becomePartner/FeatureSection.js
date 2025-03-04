import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { Campaign, Language, LocationOn } from "@mui/icons-material";

const features = [
  {
    image: "/images/Partners-4.jpg",
    title: "INCREMENTAL SALES AND EXPOSURE",
    description:
      "Increase your sales and reach new customers. Our commercial team is here to make your growth journey simple.",
  },
  {
    image: "/images/Partners-2.jpg",
    title: "A SOPHISTICATED DIGITAL CHANNEL",
    description:
      "Showcase your products with beautiful photos and customize your menu in real-time. A sophisticated, intuitive online experience.",
  },
  {
    image: "/images/Partners-1.jpg",
    title: "STREAMLINED END-TO-END LOGISTICS",
    description:
      "Get your products delivered efficiently. We take care of everything from customization to feedback. Unparalleled customer support.",
  },
];

const FeatureSection = () => {
  return (
    <Grid container spacing={4} justifyContent="center" sx={{ mt: 5,}}>
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box>
            <img
              src={feature.image}
              alt={feature.title}
              style={{ width: "300px", height: "200px", objectFit: "contain" }}
            />
          </Box>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" sx={{textAlign:'left'}}>
              {feature.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1} sx={{textAlign:'left'}}>
              {feature.description}
            </Typography>
          </CardContent>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeatureSection;
