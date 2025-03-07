import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useParams } from "react-router-dom";

function AffiliateMarketDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(
          `https://yubaibackend.hhpsoftware.com/api/get-affiliate-product`
        );
        const data = await response.json();

        if (data && data.data) {
          const selectedProduct = data.data.find((item) => item.slug === slug);
          setProduct(selectedProduct);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [slug]);

  if (loading) return <Typography>Loading...</Typography>;
  if (!product) return <Typography>Product not found</Typography>;

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 10 }}>
      <Card sx={{ borderRadius: 2 }} elevation={0}>
        <CardMedia
          component="img"
          height="300"
          image={
            product.image_url !== "not found"
              ? product.image_url
              : "/images/product-display.jpg"
          }
          //   alt={product.title}
        />
        <CardContent>
          <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "left" }}>
            {product.title}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ mt: 2, textAlign: "left" }}
          >
            {product.description}
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
              Price: ${" "}
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
    </Container>
  );
}

export default AffiliateMarketDetail;
