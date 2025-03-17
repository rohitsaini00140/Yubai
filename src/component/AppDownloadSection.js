import { Box, Container, Grid, Typography,} from "@mui/material";

export default function AppDownloadSection() {

 
  const handleClick = () => {
    alert("Coming Soon!");
  };

  return (
    <Box sx={{ textAlign: "center", py: 2 }}>
      <Typography variant="h6" sx={{fontSize:{xs:"24px",sm:"28px"}, fontWeight: "bold", mb: 4 }}>
        Get the app today
      </Typography>
      <Container maxWidth="sm">
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <img
              src="/images/appStore.png"
              alt="Download on the App Store"
              width="160"
              onClick={handleClick}
              style={{cursor:"pointer"}}
            />
          </Grid>
          <Grid item>
            <img
              src="images/googleplay.png"
              alt="Get it on Google Play"
              width="160"
              onClick={handleClick}
              style={{cursor:"pointer"}}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
