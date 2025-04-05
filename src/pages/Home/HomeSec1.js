import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import herohome from "../../Assets/herohome.jpg";


import GoogleIcon from "@mui/icons-material/Google"; // Placeholder for Google Certified icon
import AndroidIcon from "@mui/icons-material/Android"; // Placeholder for Android 13.0 icon
import WifiIcon from "@mui/icons-material/Wifi"; // Placeholder for Dual WiFi icon

const HeroSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/learn-more"); // Adjust the route as needed
  };

  return (
    <Box
      sx={{
        
        position: "relative", // For absolute positioning of the text
        overflow: "hidden", // Prevent any overflow issues
      }}
    >
      <Box
        sx={{
          width: "auto", // Full width
          height: "100vh", // Full viewport height
          maxWidth: "100%", // Ensure no max-width constraint
        }}
      >
        <img
          src={herohome}
          alt="CYNKCO smart screens"
          style={{
            width: "100%", // Full width
            height: "100vh", // Full height
            objectFit: "cover", // Fill the space, may crop the image
            display: "block", // Remove any inline spacing
          }}
        />

        {/* Overlay Text on the Image */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: "40%", sm: "60%", md: "30%" }, // Adjust position for different screen sizes
            left: { xs: "5%", sm: "10%" }, // Position towards the left
            textAlign: "left", // Align text to the left
            color: "#fff", // White text for contrast
            transform: { xs: "translateY(-50%)", md: "none" }, // Center vertically on smaller screens
          }}
        >
          {/* Subtitle */}
          <Typography
            variant="h6"
            sx={{
              background: "linear-gradient(45deg, #006400, #0D47A1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 500,
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, // Responsive font size
            }}
          >
            CYNKCO | M6APro
          </Typography>

          {/* Main Heading */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(45deg, #006400, #0D47A1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mt: 1,
              mb: 2,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" }, // Responsive font size
            }}
          >
            THE FIRST GOOGLE <br /> EDLA-CERTIFIED IFPS
          </Typography>

          {/* Icons and Labels */}
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ mb: 3 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <GoogleIcon
                sx={{
                  color: "#4285F4", // Dominant blue from Google logo
                  fontSize: { xs: "1rem", md: "1.5rem" },
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#555", fontSize: { xs: "0.75rem", md: "1rem" } }}
              >
                Google Certified
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AndroidIcon
                sx={{
                  color: "#3DDC84", // Green from Android logo
                  fontSize: { xs: "1rem", md: "1.5rem" },
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#555", fontSize: { xs: "0.75rem", md: "1rem" } }}
              >
                Android 13.0
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <WifiIcon
                sx={{
                  color: "#000000", // Black for WiFi icon
                  fontSize: { xs: "1rem", md: "1.5rem" },
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#555", fontSize: { xs: "0.75rem", md: "1rem" } }}
              >
                Dual WiFi
              </Typography>
            </Box>
          </Stack>

          {/* Learn More Button */}
          <Button
            variant="contained"
            onClick={handleLearnMore}
            sx={{
              backgroundColor: "#1C883C", // green button
              color: "#fff",
              textTransform: "none",
              padding: { xs: "8px 16px", md: "10px 20px" }, // Responsive padding
              borderRadius: "25px",
              fontSize: { xs: "0.875rem", md: "1rem" }, // Responsive font size
              "&:hover": {
                backgroundColor: "#0D47A1",
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;