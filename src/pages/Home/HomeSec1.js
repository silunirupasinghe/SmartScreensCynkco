import React from "react";
import { Box, Typography, Button, Stack, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import herohome from "../../Assets/homenew.png"; // Default image for larger screens
import herohomeMobile from "../../Assets/herohome-mobile.png"; // Image for small screens
import CameraIcon from "@mui/icons-material/PhotoCamera";
import MicIcon from "@mui/icons-material/Mic";
import WifiIcon from "@mui/icons-material/Wifi";
import colors from "../../theme/colors"; // Import the colors

const HeroSection = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Below 600px

  const handleLearnMore = () => {
    navigate("/products/smart-screens/");
  };

  const imageSrc = isSmallScreen ? herohomeMobile : herohome;

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { xs: "100vh", sm: "90vh", md: "100vh" },
          maxWidth: "100%",
        }}
      >
        <img
          src={imageSrc}
          alt="CYNKCO smart boards"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </Box>

      {/* Overlay Text on the Image */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "30%", sm: "40%", md: "30%" },
          left: { xs: "5%", sm: "8%", md: "7%" },
          width: { xs: "90%", sm: "80%", md: "50%" },
          textAlign: "left",
          color: colors.textOverlay, // Use color from colors.js
        }}
      >
        {/* Subtitle */}
        <Typography
          variant="h6"
          sx={{
            background: `linear-gradient(45deg, ${colors.darkBlue}, ${colors.lightBlue})`, // Fixed syntax
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 500,
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            lineHeight: 1.2,
          }}
        >
          CYNKCO Smart Boards
        </Typography>

        {/* Main Heading */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            background: `linear-gradient(45deg, ${colors.gradientStart}, ${colors.darkBlue})`, // Use colors from colors.js
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mt: 1,
            mb: 2,
            fontSize: { xs: "1.3rem", sm: "1.8rem", md: "3rem" },
            lineHeight: 1.3,
          }}
        >
          NEXT-LEVEL INTERACTIVE <br /> COLLABORATION
        </Typography>

        {/* Icons and Labels */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ mb: 3 }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CameraIcon
              sx={{
                color: colors.cameraIcon, // Use color from colors.js
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: colors.featureText, // Use color from colors.js
                fontSize: { xs: "0.7rem", sm: "0.85rem", md: "1rem" },
              }}
            >
              High-Quality Camera
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <MicIcon
              sx={{
                color: colors.micIcon, // Use color from colors.js
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: colors.featureText, // Use color from colors.js
                fontSize: { xs: "0.7rem", sm: "0.85rem", md: "1rem" },
              }}
            >
              Advanced Audio
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <WifiIcon
              sx={{
                color: colors.wifiIcon, // Use color from colors.js
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: colors.featureText, // Use color from colors.js
                fontSize: { xs: "0.7rem", sm: "0.85rem", md: "1rem" },
              }}
            >
              Dual-Band WiFi
            </Typography>
          </Box>
        </Stack>

        {/* Learn More Button */}
        <Button
          variant="contained"
          onClick={handleLearnMore}
          sx={{
            backgroundColor: colors.darkBlue, // Use color from colors.js
            color: colors.textOverlay, // Use color from colors.js
            textTransform: "none",
            padding: { xs: "6px 12px", sm: "8px 16px", md: "10px 20px" },
            borderRadius: "25px",
            fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
            "&:hover": {
              backgroundColor: colors.lightBlue, // Use color from colors.js
            },
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;