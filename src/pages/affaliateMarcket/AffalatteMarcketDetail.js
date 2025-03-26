import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import PageNotFound from "../PagenotFound";
import { Helmet } from "react-helmet-async";

function AffiliateMarketDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(
          `https://backend.yubai.ai/api/get-affiliate-product`
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

  const handleBuyNowClick = async () => {
    if (!product?.affiliate_url) return;

    console.log("Sending request to track affiliate click...");

    try {
      const response = await fetch(
        "https://backend.yubai.ai/api/affiliate-click-count",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            affiliate_product_id: product.id,
            // slug: product.slug,
          }),
        }
      );

      console.log("Response status:", response.status); // Check HTTP status
      const data = await response.json();
      console.log("Response data:", data); // Check API response
    } catch (error) {
      console.error("Error tracking click:", error);
    }
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (!product) return <Typography>Product not found</Typography>;


console.log(product.meta_description,"kyaaaaaaaaaaaa")

  return (

    <>

       {/* Dynamic Meta Title & Description */}
       <Helmet>
              <title>{product.meta_title?.length ? product.meta_title : "Yubai AI | Transforming Data into Intelligent Decisions"}</title>
              <meta name="description" content={product.meta_description} />
            </Helmet>
    <Container maxWidth="md" sx={{ mt: 5, mb: 10 }}>


        
      <Card sx={{ borderRadius: 2 }} elevation={0}>
        <CardMedia
          component="img"
          sx={{
            height: 400,
            objectFit: "contain",
          }}
          image={
            product.image_url !== "not found"
              ? product.image_url
              : "/images/product-display.jpg"
          }
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
            {product.description.replace(/<\/?[^>]+(>|$)/g, "")}
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
              Price: (AED){" "}
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

        <CardActions>
          {product?.affiliate_url ? (
            <Link
              to={product.affiliate_url}
              target="_blank"
              onClick={handleBuyNowClick}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ce352f",
                  color: "#fff",
                  height: "35px",
                  fontSize: "14px",
                  borderRadius: "5px",
                  "&:hover": { backgroundColor: "#ce352f" },
                }}
              >
                Buy Now
              </Button>
            </Link>
          ) : (
            <Button
              variant="contained"
              disabled
              sx={{ height: "35px", fontSize: "14px" }}
            >
              <PageNotFound />
            </Button>
          )}
        </CardActions>
      </Card>
    </Container>
    </>
  );
}

export default AffiliateMarketDetail;
