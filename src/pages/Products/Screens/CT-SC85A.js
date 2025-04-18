import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { styled } from "@mui/material/styles";
import "@fontsource/poppins/700.css"; // Bold for headings
import "@fontsource/roboto/400.css"; // Regular for body text
import Contact from "./Contact";

import CTSC85A from "../../../Assets/Products/Screens/CT-SC85A.png";

// Theme Colors
const green = "#24AC4C";
const greenDark = "#006400";

// Styled Components
const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  backgroundColor: "#F1FFF7", // Equivalent to bg-gray-100
}));

const SpecsHeader = styled(Box)(({ theme }) => ({
  backgroundColor: greenDark,
  color: "#fff",
  textAlign: "center",
  padding: theme.spacing(3),
}));

const CTSC85APage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px - 960px

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);

  // Technical Specs Data (updated to include all details from PDF)
  const specsData = [
    {
      label: "Display",
      value:
        '86" IPS, 3840x2160 resolution, 1895.04(H) × 1065.96(V) mm display size, 0.4296 × 0.4296 mm pixel pitch, 350 cd/m² brightness, 1200:1 contrast, 178° viewing angle, 60Hz refresh, 1.07B (10bit) colors, 72% NTSC color gamut, DLED backlight, ≥30,000 hours lifespan, 8ms response time',
    },
    {
      label: "Touch",
      value:
        "40-point infrared recognition, passive infrared pen input, ±1mm accuracy, 2mm minimum recognition object, ≤2.5mm writing height, dual-pen dual-color support, 32768(W) × 32768(D) output coordinates, ≤7ms response, supports Windows 10/8/7/XP, Android, Linux, Mac OS X, Chrome",
    },
    {
      label: "Audio",
      value: "2x15W speakers (2.0 sound track), located at bottom and back side",
    },
    {
      label: "System",
      value:
        "Android 11.0, Quad-core A55 CPU, MaliG52MP2 GPU, 4GB RAM, 32GB ROM",
    },
    {
      label: "Connectivity",
      value:
        "HDMI IN (2), USB 3.0 (1, on-board), USB 2.0 (3, including 2 front), USB-C (1), TOUCH 2.0 (1), Mini MIC IN (1), OPTICAL OUT (1), Mini LINE OUT (1), RS232 (1), RJ45 IN (1), supports USB switching with channel",
    },
    {
      label: "Power",
      value: "360W max, ≤0.5W standby, 100-240V ~ 50/60Hz 5.5A, power connector at bottom",
    },
    {
      label: "Dimensions & Weight",
      value: "1953.5 x 1154 x 88.4 mm (machine size), 110.4 mm thickness (without wall plate), 2116 x 267 x 1395 mm (package size), 800 x 400 mm VESA, M8 x 25 mm wall mounting screws, 68 kg net weight, 83 kg gross weight",
    },
    {
      label: "Accessories",
      value: "Power cord (1), 2 styluses (magnetic attachment support), wall mount (1)",
    },
    {
      label: "Environmental",
      value:
        "Operating: 0°C ~ 40°C, 10% ~ 90% RH; Storage: -20°C ~ 60°C, 10% ~ 90% RH; Working height: Below 5000 meters",
    },
    {
      label: "Standard Modules",
      value: "PC Module: OPS62A",
    },
    {
      label: "Components",
      value: "On/Off button (bottom), Camera (top)",
    },
  ];

  // Key Features (updated to include all features from PDF)
  const keyFeatures = [
    "Ultra-narrow Bezel Design with Simple Appearance",
    "Android 11.0 Operating System",
    "4K Ultra HD Display with Full-channel 4K UI",
    "Dual-pen, Dual-color Writing for Multi-people Collaboration",
    "Wireless Screen Sharing",
    "3mm Anti-glare Tempered Glass with High Haze OC, Anti-ambient Light Interference",
    "Hotspot Dual-band 2.4G/5G, AP+STA Mode",
    "Light-sensitive Brightness Adjustment with DC Dimming (Eye-care Display)",
    "±1mm High-precision Infrared Touch, Smooth Writing",
  ];

  // Introduction Points (updated to include all relevant points)
  const introductionPoints = [
    "Advanced interactive display for professional collaboration",
    "Zero-lamination process for low parallax writing and wider viewing angle",
    "High-precision infrared touch technology",
  ];

  // Keywords for Chips (updated to reflect all CT-SC85A features)
  const keywords = [
    "Interactive Whiteboard",
    "Ultra-narrow Bezel",
    "4K UHD Display",
    "Infrared Touch",
    "Dual-pen Writing",
    "Dual-band Hotspot",
    "Eye-care Display",
    "Seamless Collaboration",
    "Anti-glare Glass",
  ];

  // Product Notes (from Page 7 of PDF)
  const productNotes = [
    "Affected by the product configuration and manufacturing process, the actual body size/weight may vary, please prevail in kind.",
    "Product images in this specification are for illustrative purposes only, the actual product effects (including but not limited to appearance, color, size) may vary slightly, please prevail in kind.",
    "Specifications may be adjusted and revised in real-time to match actual product performance, with no special notice provided.",
  ];

  return (
    <Section>
      {/* Product Overview */}
      <Container maxWidth="lg">
        <Grid container spacing={isMobile ? 2 : 4} alignItems="center" sx={{ py: isMobile ? 4 : 8 }}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <CardMedia
              component="img"
              image={CTSC85A}
              alt="CYNKCO Smart Screen CT-SC85A"
              sx={{
                maxWidth: isMobile ? "85%" : "90%",
                margin: "0 auto",
                display: "block",
              }}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                background: "linear-gradient(90deg, #006400, #0D47A1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.2,
                mb: 1,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              CYNKCO CT-SC85A
            </Typography>
            <Typography
              variant={isMobile ? "h6" : isTablet ? "h5" : "h4"}
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                color: "#555",
                lineHeight: 0.7,
                mb: 3,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              Android/Windows
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              {keywords.map((keyword, index) => (
                <Chip
                  key={index}
                  label={keyword}
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 500,
                    backgroundColor: "#fff",
                    border: `1px solid ${greenDark}`,
                    borderRadius: "16px",
                    color: "#374151",
                    px: isMobile ? 1.5 : 2,
                    py: 0.5,
                    fontSize: isMobile ? "0.75rem" : "0.875rem",
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Specifications Section Header */}
      <SpecsHeader>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
        >
          CYNKCO CT-SC85A Specifications
        </Typography>
      </SpecsHeader>

      {/* Specifications with Accordion */}
      <Container maxWidth="lg" sx={{ my: isMobile ? 4 : 6 }}>
        <Paper elevation={3} sx={{ p: isMobile ? 2 : 4, borderRadius: "8px" }}>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: "#1F2937",
              borderBottom: `1px solid ${greenDark}`,
              pb: 2,
              mb: 4,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Overview
          </Typography>
          <Grid container spacing={isMobile ? 1 : 2}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: "#F1FFF7",
                    borderBottom: `1px solid ${greenDark}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 700,
                      color: greenDark,
                      fontSize: isMobile ? "0.9rem" : "1rem",
                    }}
                  >
                    Key Features
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    {keyFeatures.map((feature, index) => (
                      <Box
                        key={index}
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <CheckCircleOutlineIcon
                          sx={{ color: green, mr: 1, fontSize: isMobile ? 18 : 24 }}
                        />
                        <Typography
                          sx={{
                            fontFamily: "Roboto, sans-serif",
                            color: "#374151",
                            fontSize: isMobile ? "0.85rem" : "1rem",
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: "#F1FFF7",
                    borderBottom: `1px solid ${greenDark}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 700,
                      color: greenDark,
                      fontSize: isMobile ? "0.9rem" : "1rem",
                    }}
                  >
                    Introduction
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    {introductionPoints.map((point, index) => (
                      <Box
                        key={index}
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <CheckCircleOutlineIcon
                          sx={{ color: green, mr: 1, fontSize: isMobile ? 18 : 24 }}
                        />
                        <Typography
                          sx={{
                            fontFamily: "Roboto, sans-serif",
                            color: "#374151",
                            fontSize: isMobile ? "0.85rem" : "1rem",
                          }}
                        >
                          {point}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: "#1F2937",
              borderBottom: `1px solid ${greenDark}`,
              pb: 2,
              mt: isMobile ? 4 : 6,
              mb: 4,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Technical Specifications
          </Typography>
          <TableContainer>
            <Table sx={{ minWidth: isMobile ? "auto" : 650 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: greenDark }}>
                  <TableCell
                    sx={{
                      color: "#fff",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 700,
                      fontSize: isMobile ? "0.8rem" : "1rem",
                      padding: isMobile ? "8px" : "16px",
                    }}
                  >
                    Specification
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#fff",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 700,
                      fontSize: isMobile ? "0.8rem" : "1rem",
                      padding: isMobile ? "8px" : "16px",
                    }}
                  >
                    Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {specsData.map((spec, index) => (
                  <TableRow key={index}>
                    <TableCell
                      sx={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 700,
                        color: greenDark,
                        fontSize: isMobile ? "0.75rem" : "0.875rem",
                        padding: isMobile ? "8px" : "16px",
                      }}
                    >
                      {spec.label}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Roboto, sans-serif",
                        color: "#374151",
                        fontSize: isMobile ? "0.75rem" : "0.875rem",
                        padding: isMobile ? "8px" : "16px",
                      }}
                    >
                      {spec.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Product Notes Section */}
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: "#1F2937",
              borderBottom: `1px solid ${greenDark}`,
              pb: 2,
              mt: isMobile ? 4 : 6,
              mb: 4,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Product Notes
          </Typography>
          <Box>
            {productNotes.map((note, index) => (
              <Typography
                key={index}
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  color: "#374151",
                  fontSize: isMobile ? "0.85rem" : "1rem",
                  mb: 1,
                }}
              >
                - {note}
              </Typography>
            ))}
          </Box>
        </Paper>

        <Contact />
      </Container>
    </Section>
  );
};

export default CTSC85APage;