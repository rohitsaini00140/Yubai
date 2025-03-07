import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function AffiliateMarket() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://yubaibackend.hhpsoftware.com/api/get-affiliate-product"
        );
        const data = await response.json();
        if (data && data.data) {
          setProducts(data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCardClick = (slug) => {
    console.log("Navigating to:", `/affiliate-market/${slug}`);
    navigate(`/affiliate-market/${slug}`);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 10,height:"auto" }}>
      <Typography variant="h3" align="left" gutterBottom  sx={{fontSize:{xs:"32px",sm:"34px"},fontWeight:600,}}>
        Affiliate Products
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={6} key={product.id}>
            <Card
              sx={{ borderRadius: 2, boxShadow: 3, cursor: "pointer", }}
              onClick={() => handleCardClick(product.slug)}
            >
              <CardMedia
                component="img"
                height="200"
                image={
                  product.image_url !== "not found"
                    ? product.image_url
                    : "images/product-display.jpg"
                }
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2, textAlign: "left" }}>
                  {product.title.length > 50 ? product.title.substring(0,45) + "..." : product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{textAlign: "left" }}>
                  {product.description.length > 100
                    ? product.description.substring(0, 100) + "..."
                    : product.description}
                </Typography>

                  <Typography
                            variant="h6"
                            color="gray"
                            sx={{ mt: 2, textAlign: "left" }}
                          >
                            <Typography
                              component="span"
                              sx={{ fontWeight: "bold", fontSize: "18px" }}
                            >
                              Price:(AED) {" "}
                            </Typography>
                            {product.price}
                          </Typography>
                
                          <Typography
                            variant="caption"
                            display="block"
                            color="gray"
                            sx={{ mt: 1, textAlign: "left" }}
                          >
                            <Typography component="span" sx={{ fontWeight: "bold" }}>
                              Category :
                            </Typography>{" "}
                            {product.category_name}
                          </Typography>
                
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AffiliateMarket;
