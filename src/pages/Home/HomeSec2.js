import React from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery, Chip } from "@mui/material";
import smartScreen2 from "../../Assets/smartScreen2.jpg";
import colors from "../../theme/colors"; // Import the colors

const HomeSec2 = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm")); // Small screens and below

  const specs = [
    "4K Ultra HD Display", "48MP Camera", "Dual-Band WiFi",
    "8-Array Microphone", "40-Point Touch", "Wireless Sharing",
  ];

  return (
    <Box
      sx={{
        my: { xs: "40px", sm: "50px", md: "70px" }, // Responsive vertical margins
        py: { xs: "10px", sm: "15px", md: "20px" }, // Responsive vertical padding
        px: { xs: 2, sm: 3, md: 5 }, // Responsive horizontal padding
      }}
    >
      <Grid container spacing={isSmDown ? 1 : 2} justifyContent="center">
        {/* Image Section */}
        <Grid
          item
          size={{ sm: 12, md: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            px: { xs: 2, sm: 3, md: 5 }, // Responsive padding
          }}
        >
          <Box
            component="img"
            src={smartScreen2}
            alt="CYNKCO CT-SC65WC Smart Board"
            sx={{
              width: "100%",
              maxWidth: { xs: 300, sm: 450, md: 600 }, // Responsive max-width
              height: "auto",
              borderRadius: 1,
              objectFit: "cover", // Ensures image scales nicely
            }}
          />
        </Grid>

        {/* Text and Specs Section */}
        <Grid
          item
          size={{ sm: 12, md: 6 }}
          sx={{
            display: "flex",
            alignItems: "center", // Vertically center content
            mt: { xs: 4, md: 0 }, // Margin-top on small screens only
          }}
        >
          <Box sx={{ px: { xs: 2, sm: 5, md: 4 } }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                mb: { xs: 1, sm: 2 }, // Responsive margin-bottom
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                lineHeight: 1.2,
                background: `linear-gradient(45deg, ${colors.darkBlue}, ${colors.lightBlue})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ultimate Collaboration Hub
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, sm: 3, md: 4 }, // Responsive margin-bottom
                color: "#555",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.5, // Improved readability
              }}
            >
              The CYNKCO CT-SC65WC interactive smart board redefines efficiency with its zero-lamination design, delivering smooth writing and vibrant visuals for seamless collaboration.
            </Typography>

           
            

              <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                justifyContent: isSmDown ? "center" : "flex-start",
              }}
            >
              {specs.map((spec, index) => (
                <Chip
                  key={index}
                  label={spec}
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 500,
                    backgroundColor: "#fff",
                    border: `1px solid ${colors.darkBlue}`,
                    borderRadius: "16px",
                    color: "#374151",
                    px: isSmDown ? 1.5 : 2,
                    py: 0.5,
                    fontSize: isSmDown ? "0.75rem" : "0.875rem",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeSec2;