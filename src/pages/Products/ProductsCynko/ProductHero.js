// import React from "react";
// import { Box, Typography } from "@mui/material";

// import "@fontsource/poppins"; // Headings
// import "@fontsource/roboto"; // Paragraphs

// import backgroundImage from "../../../Assets/hero.jpg";

// const HeroSection = () => {
//   return (
//     <Box
//       sx={{
//         position: "relative",
//         width: { md: "auto" },
//         height: { xs: "420px", md: "540px" },
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         px: 2,
//         "&::after": {
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(184, 230, 202, 0.55)",
//           zIndex: 1,
//         },
//       }}
//     >
//       <Box
//         sx={{
//           position: "relative",
//           zIndex: 2,
//           textAlign: "center",
//           color: "#fff",
//           maxWidth: "800px",
//         }}
//       >
//         <Typography
//           variant="h3"
//           sx={{
//             fontFamily: "Poppins, sans-serif",
//             fontWeight: 600,
//             fontSize: { xs: "2rem", md: "3.2rem" },
//             lineHeight: 1.3,
//             background: "linear-gradient(45deg, #006400, #0D47A1)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             mb: 2,
//           }}
//         >
//           Products
//         </Typography>

//         <Typography
//           variant="subtitle1"
//           sx={{
//             fontFamily: "Roboto",
//             fontWeight: 400,
//             fontSize: { xs: "1rem", md: "1.25rem" },
//             color: "#555",
//             px: { xs: 2, md: 0 },
//           }}
//         >
//           Explore Interactive Displays, Smart Boards & Robust Display Stands for
//           Seamless Business & Education Experiences
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default HeroSection;

import React from "react";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import heroImage from "../../../Assets/hero.jpg"

// Styled component for the hero section with gradient and background image
const HeroSection = styled(Box)(({ theme }) => ({
  height: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  background: `url(${heroImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  overflow: "hidden",
}));

// Styled component for the content container
const HeroContent = styled(Box)(({ theme }) => ({
  width: "100%", // Changed from maxWidth to ensure full width
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: "bold",
              background: "linear-gradient(30deg, #0D47A1, #006400)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.2,
              mb: 2,
              textAlign: "center",
            }}
          >
           Smart Screens
          </Typography>
          <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: { xs: "1rem", md: "1.25rem" },
            color: "#555",
            px: { xs: 2, md: 0 },
          }}
        >
          "Explore Interactive Displays, Smart Boards & Robust Display Stands <br/>for
          Seamless Business & Education Experiences"
        </Typography>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;
