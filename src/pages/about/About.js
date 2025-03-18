import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import FirstCard from './FirstCard'
import Second from './SecondCard'
import ThirdCard from './ThirdCard'
import Opportunities from './Opportunities'

function About() {
  return (

    <>
    <Box
    sx={{
      position: "relative",
      width: "100%",
      height: "60vh",
      backgroundImage: "url('/about/front-view-.avif')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
     objectFit:"contain"
    }}
  >
    <Container>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", color: "#fff", mb: 2 }}
      >
     More life. Less hassle.
      </Typography>


    </Container>
  </Box>

  <Typography variant='h3' sx={{mt:{xs:"50px",md:"60px"},fontWeight:"bold",fontSize:{xs:"28px",md:"32px"}}}>OUR MISSION</Typography>
<FirstCard/>
<Second/>
<ThirdCard/>
<Opportunities/>
  </>
  )
}

export default About