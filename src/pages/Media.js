import React from 'react'
import { Container, Typography} from "@mui/material";

function Media() {
  return (
    <Container sx={{ padding:{xs:"50px 50px",sm: "40px 90px" }}}>
      <Typography variant="h4" gutterBottom  sx={{fontSize:{xs:"24px",sm:"34px"},fontWeight:600,mt:{xs:"30px",sm:'0px'},textAlign:"left"}} >
        Yubai closes $18Mn Series B Round
      </Typography>
      <Typography variant="body1" paragraph sx={{textAlign:"left"}}>
        Yubai closed an $18Mn Series B funding round. The record round, the largest in Iraq, is being led by the IFC, a member of the World Bank Group, and includes participation from Endeavor Catalyst, Merit Ventures, BY Venture Partners, Saks Holding, Caruso Ventures, Sanad Partners, Masha Holding, and other regional and international funds and family offices.
      </Typography>
      <Typography variant="body1" paragraph sx={{textAlign:"left"}}>
        Founded in 2017, Yubai is one of the first technology pioneers in Lebanon and Iraq. The company developed a platform that delivers high-quality convenience to customers (deliveries range from food, grocery, electronics, retail, and courier services) and currently collaborates with 4,000 partners, serving half a million customers in all of its markets. Customers on the platform also have access to <i>Yubai Fresh</i>, a chain of dark grocery warehouses that deliver within 15 minutes.
      </Typography>
      <Typography variant="body1" paragraph sx={{textAlign:"left"}}>
        Yubai, which employs over 500 people, with over 50 engineers in product and tech development, is one of the first companies to advance the digital economy in its markets. It is also setting a benchmark for successful companies in reimagined future Lebanese and Iraqi economies.
      </Typography>
      <Typography variant="body1" paragraph sx={{textAlign:"left"}}>
        "Our partnership with IFC will speed up our growth and further our expansion in Iraq, which is one of the largest markets in the region," said Tamim Khalfa, Yubai' co-founder and CEO. "This is a massive opportunity. We will leverage our leading position and powerful platform to offer critical new services that benefit customers, retailers, and couriers alike."
      </Typography>
      <Typography variant="body1" paragraph sx={{textAlign:"left"}}>
        Nael Halwani, Yubai co-founder and COO, said: "This new investment will further strengthen Yubai’ leadership position in Iraq and Lebanon. Yubai just scratched the surface of a 100Bn USD consumer spending market in Iraq – we will continue growing by providing the best and most reliable service to consumers, supporting local merchants & restaurants, and empowering couriers."
      </Typography>
      <Typography variant="body1" paragraph sx={{textAlign:"left"}}>
        BY Venture Partners led Yubai Series A round in 2018 and is participating strongly in this round. "BY is backing an exceptional team at Yubai – led by Tamim and Nael. We’re proud of their success in Lebanon and excited about the potential in Iraq, one of the largest markets in MENA."
      </Typography>
      <Typography variant="body1" paragraph sx={{textAlign:"left"}}>
        Also participating in the round is Endeavor Catalyst, a co-investment fund set up by Endeavor to exclusively support Endeavor Entrepreneur-led companies. "We’ve been big fans of the Yubai founding team since they joined the Endeavor network in 2018 and have been tracking their performance."
      </Typography>
      <Typography variant="body1" paragraph sx={{textAlign:"left"}}>
        Yubai received backing from several regional and international family offices. Dan Caruso, Managing Director of Caruso Ventures, said: "We see a big market in Iraq and an extremely capable team. We believe in this team’s ability to continue leading the digitization of Iraq’s e- and quick commerce markets."
      </Typography>
      <Typography variant="body1" paragraph sx={{textAlign:"left"}}>
        Dominique Locher, a long-time Swiss food entrepreneur, said: "I feel extremely confident about the intersection in which Yubai' Super App is operating, and the Iraqi market which continues to experience economic growth with a tech-savvy young consumer base."
      </Typography>
    </Container>
  )
}

export default Media