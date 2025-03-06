import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#ce352f", py: 3 }}>
      <Container 
        maxWidth="md" 
        sx={{ 
          display: "flex", 
          justifyContent: { xs: "center", md: "left" }, 
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" }, 
          flexWrap: "wrap", 
          gap: 2, 
          mt: "10px", 
          mb: "50px", 
          textAlign: "center"
        }}
      >
        <Typography 
          variant="body1" 
          component="nav"
          sx={{ 
            display: "flex", 
            flexDirection: { xs: "column", sm: "row" }, 
            gap: 3, 
            color: "white", 
            listStyle: "none" 
          }}
        >
          <Link href="" underline="none" color="inherit" sx={{textDecoration:"none",fontSize:{xs:"14px",sm:"16px"}}}>Terms & Condition</Link>
          <Link href="" underline="none" color="inherit" sx={{textDecoration:"none",fontSize:{xs:"14px",sm:"16px"}}}>Privacy Policy</Link>
          <Link href="" underline="none" color="inherit" sx={{textDecoration:"none",fontSize:{xs:"14px",sm:"16px"}}}>Carrier</Link>
          <Link href="/contact" underline="none" color="inherit"  sx={{textDecoration:"none",fontSize:{xs:"14px",sm:"16px"}}}>Contact</Link>
          <Link href="/affilate-marcket" underline="none" color="inherit" sx={{textDecoration:"none",fontSize:{xs:"14px",sm:"16px"}}}>Affiliate Amazon Market</Link>
        </Typography>
      </Container>
    </Box>
  );
}
