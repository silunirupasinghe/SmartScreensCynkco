import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import herohome from "../../Assets/herohome.jpg";
import CameraIcon from "@mui/icons-material/PhotoCamera"; // Icon for camera feature
import MicIcon from "@mui/icons-material/Mic"; // Icon for microphone feature
import WifiIcon from "@mui/icons-material/Wifi"; // Icon for Dual WiFi

const HeroSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/products/smart-screens/"); // Adjust the route as needed
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
          alt="CYNKCO smart boards"
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
            CYNKCO Smart Boards
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
            NEXT-LEVEL INTERACTIVE <br /> COLLABORATION
          </Typography>

          {/* Icons and Labels */}
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ mb: 3 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CameraIcon
                sx={{
                  color: "#4285F4", // Blue for camera
                  fontSize: { xs: "1rem", md: "1.5rem" },
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#555", fontSize: { xs: "0.75rem", md: "1rem" } }}
              >
                High-Quality Camera
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <MicIcon
                sx={{
                  color: "#24AC4C", // Green for microphones
                  fontSize: { xs: "1rem", md: "1.5rem" },
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#555", fontSize: { xs: "0.75rem", md: "1rem" } }}
              >
                Advanced Audio
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <WifiIcon
                sx={{
                  color: "#000000", // Black for WiFi
                  fontSize: { xs: "1rem", md: "1.5rem" },
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#555", fontSize: { xs: "0.75rem", md: "1rem" } }}
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
              backgroundColor: "#006400", // Green button
              color: "#fff",
              textTransform: "none",
              padding: { xs: "8px 16px", md: "10px 20px" }, // Responsive padding
              borderRadius: "25px",
              fontSize: { xs: "0.875rem", md: "1rem" }, // Responsive font size
              "&:hover": {
                backgroundColor: "#24AC4C",
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