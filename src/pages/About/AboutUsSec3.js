import { Box, Typography, Container, Grid, CardMedia } from "@mui/material";
import React from 'react'
import colors from "../../theme/colors";
import signage from "../../Assets/aboutUs/signage.jpg";
const AboutUsSec3 = () => {
  return (
    <Container>
         <Grid
          container
          spacing={2}
          sx={{
            alignItems: "flex-start",
            flexDirection: { md: "row", flexDirection:"column-reverse", justifyContent: "space-between"},
          }}
        >
          <Grid size={{xs:12,md:7}} sx={{ my: { xs: 2, md: 2 }, pb:2,  textAlign: "left" }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.9rem", md: "4.8rem" },
                fontWeight: 900,
                color: colors.darkBlue,
                lineHeight: 1.1,
                mb: { xs: 1, sm: 2 },
              }}
            >
              Let’s get <br /> in touch
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.3rem" },
                color: "#333",
                fontWeight: 400,
                mb: { xs: 2, sm: 4 },
              }}
            >
              Reach out to us for collaborations, demos, or <br />
              any questions you have about our solutions.
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                Phone
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, mb: 2 }}>
                (+65) 60502580
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                Email
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, mb: 2 }}>
                connect@cynkco.com
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                Address
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, mb: 2 }}>
                60 Paya Lebar Road, #06-39, <br />
                Paya Lebar Square, Singapore 409051
              </Typography>
            </Box>
          </Grid>
          <Grid size={{xs:12, md:5}} sx={{ py: 2 }}>
            <CardMedia
              component="img"
              image={signage}
              sx={{
                width: "100%",
                // height: "auto",
                maxHeight: { xs: 200, sm: 300, md: 600 },
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
    </Container>
  )
}

export default AboutUsSec3