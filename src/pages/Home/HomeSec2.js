import React from "react";
import {
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import smartScreen2 from "../../Assets/smartScreen2.jpg";

const HomeSec2 = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm")); // Small screens and below
  const isMdDown = useMediaQuery(theme.breakpoints.down("md")); // Medium screens and below

  const specs = [
    ["Android 13.0", "8G+128G", "4K UI+ 4K Panel"],
    ["48MP Camera", "8-array microphone", "2.4G/5G Wifi Module"],
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
          size={{sm:12, md:6, }}
          sx={{
            display: "flex",
            justifyContent: "center",
            px: { xs: 2, sm: 3, md: 5 }, // Responsive padding
          }}
        >
          <Box
            component="img"
            src={smartScreen2}
            alt="Smart Screen"
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
          size={{sm:12, md:6, }}
          sx={{
            display: "flex",
            alignItems: "center", 
            mt:4 // Vertically center content
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
                background: "linear-gradient(45deg, #006400, #0D47A1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              The Ultimate Smart Display
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
              The latest series of Horion M6APro interactive touch screen board
              appearance uses zero fit process.
            </Typography>

            {/* Specs Section */}
            <Grid
              container
              spacing={isSmDown ? 1 : 2}
              sx={{ maxWidth: { xs: "100%", sm: 450 } }} // Full width on small screens
            >
              {specs.map((column, colIndex) => (
                <Grid item xs={6} key={colIndex}>
                  {column.map((spec, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
                        color: "#333",
                      }}
                    >
                      • {spec}
                    </Typography>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeSec2;