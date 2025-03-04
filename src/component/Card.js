import { Box, Button, Grid, Typography } from "@mui/material";

const data = [
  {
    title: "STORES & RESTAURANTS",
    description:
      "Reach new customers, grow your revenues, and deliver to the city’s best clients.",
    buttonText: "PARTNER WITH US",
    image: "https://img.freepik.com/free-vector/beautiful-green-landscape-background_1048-2991.jpg",
  },
  {
    title: "DELIVER FOR Tubai",
    description:
      "Work flexible hours, earn more money, and deliver for the city’s trendiest restaurants.",
    buttonText: "أريد الانضمام",
    image: "https://img.freepik.com/free-vector/beautiful-green-landscape-background_1048-2991.jpg",
  },
];

const Card = () => {
  return (
    <Grid container spacing={2} sx={{ padding:10 }}>
      {data.map((item, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Box
            sx={{
              position: "relative",
              height: 300,
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: 3,
              color: "white",
              fontWeight: "bold",
              '&::before': {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: 2,
              },
            }}
          >
            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Typography variant="h5" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography variant="body1" mt={1}>
                {item.description}
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 2, backgroundColor: "white", color: "black" }}
              >
                {item.buttonText}
              </Button>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Card;
